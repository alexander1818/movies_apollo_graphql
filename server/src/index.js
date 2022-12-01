require('dotenv/config');
const mongoose = require('mongoose');
const { ApolloServer} = require('apollo-server');

const userResolvers = require('./resolvers/index')
const {Query, Mutation} = userResolvers;

const typeDefs = require('./typeDefs/main/index')
const {findOrCreateUser} = require("./controllers/userController");

const PORT = process.env.PORT || 4000;

const resolvers = {
    Query,
    Mutation
}

mongoose
    .connect(process.env.MONGODB_URL, { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB Connected');
        return server.listen({ port: PORT });
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`);
    })
    .catch(err => {
        console.error(err)
    })

const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: {
        origin: "http://localhost:3000",
        credentials: true,
    },

    context: async ({ req, res }) => {
        let authToken = null
        let currentUser = null
        try {
            authToken = req.headers.authorization.split('Bearer')[1].trim();
            currentUser = await findOrCreateUser(authToken, req)

            return currentUser;
        } catch (err) {
            //Need to fix Authentication
            // throw new AuthenticationError(`Unable to authenticate user with token ${authToken}`)
            return ({req, res})
        }
        return currentUser;
    },
})




