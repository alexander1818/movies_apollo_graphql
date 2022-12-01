const {ApolloError} = require('apollo-server-errors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {API_KEY} = require("../../config");
const axios = require("axios");
const {Movies} = require("../../modules/movies/entities/Movies");
const { getMoviesByIds} = require("../../modules/movies");
const {MovieById} = require("../../modules/movies/entities/MovieById");

const BASE_API_URL = 'https://api.themoviedb.org/3'

module.exports = {
    Mutation: {

    },

    Query: {
        async popularMovies(_, args, { locale }) {
            const url = `${BASE_API_URL}/movie/popular?api_key=${API_KEY}&language=${locale}&page=${args.page}`;
            const result = await axios.get(url);
            return new Movies(result.data);
        },

        async getMovieById (_, {id}, { locale })  {
            const url = `${BASE_API_URL}/movie/${id}?api_key=${API_KEY}&language=${locale}`;
            const result = await axios.get(url);
            return new MovieById(result.data);
        },

        async moviesByIds(parent, { ids }, { locale }) {
            const request = ids.map((id) => getMoviesByIds(id, locale));
            const data = await Promise.all(request)
            const movies = data.map(({data}) => new MovieById(data))
            return movies;
        },

        async similarMovies(parent, {id}, { locale }) {
            const url = `${BASE_API_URL}/movie/${id}/similar?api_key=${API_KEY}&language=${locale}&page=${1}`;
            const result = await axios.get(url);
            return new Movies(result.data);
        }
    }
}