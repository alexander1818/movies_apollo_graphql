
const User = require('../models/User');
const { OAuth2Client } = require('google-auth-library');
const jwt = require("jsonwebtoken");
const client = new OAuth2Client(process.env.OAUTH_CLIENT_ID, process.env.OAUTH_CLIENT_SECRET);

exports.findOrCreateUser = async (token, req) => {
    // if(token.length > 1000) {
    //     const user = await jwt.verify(token, "UNSAFE_STRING", );
    //     return user;
    // }
    // verify auth token
    const googleUser = await verifyAuthToken(token);
    // check if user exists
    const user = await checkIfUserExists(googleUser.email);
    // if user exists, return them; otherwise, create new user in db
    return user ? user : createNewUser(googleUser);
};

const verifyAuthToken = async token => {
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.OAUTH_CLIENT_ID,
        });
        return ticket.getPayload();
    } catch (err) {
        console.error('Error verifying auth token', err);
    }
};

const checkIfUserExists = async email => await User.findOne({ email }).exec();

const createNewUser = googleUser => {
    const { name, email } = googleUser;
    const user = { username: name, email };

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
    return new User(user).save();
};