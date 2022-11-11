const userResolvers = require('./userResolvers/UserResolvers');
const moviesResolvers = require('./moviesResolvers/MoviesResolvers')

module.exports = {
    Query: {
        ...userResolvers.Query,
        ...moviesResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation
    }
}