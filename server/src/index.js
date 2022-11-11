require('dotenv/config');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { ApolloServer } = require('apollo-server');

const userResolvers = require('./resolvers/index')
const {Query, Mutation} = userResolvers;

const typeDefs = require('./typeDefs/main/index')

const PORT = process.env.PORT || 4000;

const resolvers = {
    Query,
    Mutation
}

const context = ({ req, res }) => ({
    locale: req?.headers?.locale || 'en-US'
})

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
})

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
