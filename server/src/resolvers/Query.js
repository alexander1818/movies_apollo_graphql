const {getPopular, getMoviesByIds, getMovieById, getSimilarMovies} = require('../modules/movies')
const {Movie} = require("../modules/movies/entities/Movie");

async function movies(parent, args, { locale }) {
    const data = await getPopular(args.page, locale);
    return data;
}

async function moviesByIds(parent, { ids }, { locale }) {
    const request = ids.map((id) => getMoviesByIds(id, locale));
    const data = await Promise.all(request)
    const movies = data.map(({data}) => new Movie(data))
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

module.exports = {
    movies, moviesByIds, movieByID, similarMovies
}