const axios = require('axios');
const {Movies} = require('./entities/Movies')
const {API_KEY} = require('../../config/index')

const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

const getPopular = async () => {
   const result = await axios.get(url);
   return new Movies(result.data);
}

module.exports = {
    getPopular
}