const User = require('../../models/User');
const {ApolloError} = require('apollo-server-errors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = {
    Mutation: {
        async registerUser(_, {registerInput: {username, email, password}}) {
            const oldUser = await User.findOne({email});

            if(oldUser) {
                throw new ApolloError('A user already registered with the email' + email, 'USER_ALREADY_EXISTS')
            }
            // if(password.length < 8) {
            //     throw new ApolloError('A password must be at least 8 characters')
            // }

            var encryptedPassword = await bcrypt.hash(password, 10);

            const newUser = new User({
                username: username,
                email: email.toLowerCase(),
                password: encryptedPassword
            })

            const token = jwt.sign(
                {user_id: newUser._id, email},
                "UNSAFE_STRING",
                {expiresIn: "1min"},
            )
            const refreshToken = jwt.sign(
                {user_id: newUser._id, email},
                "UNSAFE_STRING_REFRESH_TOKEN",
                {expiresIn: "1d"},
            )

            newUser.token = token;
            newUser.refreshToken = refreshToken;

            const res = await newUser.save();

            return {
                id: res._id,
                ...res._doc
            }
        },
        async loginUser(_, {loginInput: { email, password}}, context) {
            const user = await User.findOne({email});

            if(user && (await bcrypt.compare(password, user.password))) {

                const token = jwt.sign(
                    {...user},
                    "UNSAFE_STRING",
                    {expiresIn: "1m"});

                const refreshToken = jwt.sign(
                    {...user},
                    "UNSAFE_STRING_REFRESH_TOKEN",
                    {expiresIn: "1d"},
                )

                user.token = token;
                user.refreshToken = refreshToken;

                // context.res.cookie("refresh-token", refreshToken, )
                // context.res.cookie("access-token", token, )

                return {
                    id: user._id,
                    ...user._doc
                }
            } else {
                throw new ApolloError("Incorrect password or email", "INCORRECT_PASSWORD")
            }
        },

    },

    Query: {
        user: (_, {ID}) => User.findById(ID),
        me: (_, ) => new User(),
        async googleLoginUser(_, a, currentUser ) {
            return currentUser;
        }

    }
}