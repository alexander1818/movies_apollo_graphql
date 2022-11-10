const {getPopular, getMoviesByIds, getMovieById, getSimilarMovies, getAllUsers, getUser, createUser} = require('../modules/movies')
const {MovieById} = require("../modules/movies/entities/MovieById");

async function movies(parent, args, { locale }) {
    const data = await getPopular(args.page, locale);
    return data;
}

async function moviesByIds(parent, { ids }, { locale }) {
    const request = ids.map((id) => getMoviesByIds(id, locale));
    const data = await Promise.all(request)
    const movies = data.map(({data}) => new MovieById(data))
    return movies;
}

async function movieByID(parent, { id }, { locale }) {
    const data = await getMovieById(id, locale)
    return data;
}

async function similarMovies(parent, args, { locale }) {
    const data = await getSimilarMovies(args.id, locale);
    return data;
}

async function allUsers(parent, _) {
    const data = await getAllUsers();
    return data;
}

async function user(parent, {id}) {
    const data = await getUser(id);
    return data;
}

async function newUser(parent, args) {
    const data = await createUser(args.input);
    return data;
}

module.exports = {
    movies, moviesByIds, movieByID, similarMovies, allUsers, user, newUser
}