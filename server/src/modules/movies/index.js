const axios = require('axios');
const {Movies} = require('./entities/Movies')
const {API_KEY} = require('../../config/index')


const getPopular = async (page) => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
   const result = await axios.get(url);
   return new Movies(result.data);
}

module.exports = {
    getPopular
}