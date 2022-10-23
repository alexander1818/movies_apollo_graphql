const {getPopular, getMoviesByIds} = require('../modules/movies')
const {Movie} = require("../modules/movies/entities/Movie");

async function movies(parent, args) {
    const data = await getPopular(args.page);
    return data;
}

async function moviesByIds(parent, { ids }) {
    const request = ids.map((id) => getMoviesByIds(id));
    const data = await Promise.all(request)
    const movies = data.map(({data}) => new Movie(data))
    return movies;
}

module.exports = {
    movies, moviesByIds
}