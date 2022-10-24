const axios = require('axios');
const {Movies} = require('./entities/Movies')
const {API_KEY} = require('../../config/index')

const BASE_API_URL = 'https://api.themoviedb.org/3'


const getPopular = async (page) => {
    const url = `${BASE_API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
   const result = await axios.get(url);
   return new Movies(result.data);
}
const getMoviesByIds = (id) => {
    const url = `${BASE_API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;
    return  axios.get(url);
   // return new Movies(result.data);
}

module.exports = {
    getPopular, getMoviesByIds,

}