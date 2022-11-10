const userResolvers = require('./userResolvers/UserResolvers');

module.exports = {
    Query: {
        ...userResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation
    }
}