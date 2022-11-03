const axios = require('axios');
const {Movies} = require('./entities/Movies')
const {API_KEY} = require('../../config/index')
const {MovieById} = require("./entities/MovieById");

const BASE_API_URL = 'https://api.themoviedb.org/3'

const getPopular = async (page, language) => {
    const url = `${BASE_API_URL}/movie/popular?api_key=${API_KEY}&language=${language}&page=${page}`;
   const result = await axios.get(url);
    return new Movies(result.data);
}
const getMoviesByIds = (id, language) => {
    const url = `${BASE_API_URL}/movie/${id}?api_key=${API_KEY}&language=${language}`;
    return  axios.get(url);
}

const getMovieById = async (id, language) => {
    const url = `${BASE_API_URL}/movie/${id}?api_key=${API_KEY}&language=${language}`;
    const result = await axios.get(url);
    return new MovieById(result.data);
}

module.exports = {
    getPopular, getMoviesByIds, getMovieById

}