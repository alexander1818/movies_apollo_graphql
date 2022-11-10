const axios = require('axios');
const {Movies} = require('./entities/Movies')
const {API_KEY} = require('../../config/index')
const {MovieById} = require("./entities/MovieById");
const {NewUser} = require("./entities/newUser");

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

const getSimilarMovies = async (id, language) => {
    const url = `${BASE_API_URL}/movie/${id}/similar?api_key=${API_KEY}&language=${language}&page=${1}`;
    const result = await axios.get(url);
    return new Movies(result.data);
}

const users = [{id: 1, userName: 'Test', age: '20'}]

async function getAllUsers(parent, _) {
    return users;
}

async function getUser(id) {
    const data = users.find((user) => id === user.id);
    return data;
}
async function createUser(input) {
    const id = Date.now();
    const user = {
        id,
        ...input
    }
    users.push(user);
    console.log(' USER==>', user);
    return new NewUser(user) ;
}

module.exports = {
    getPopular, getMoviesByIds, getMovieById, getSimilarMovies, getAllUsers, getUser, createUser

}