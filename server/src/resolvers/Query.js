const {getPopular, getMoviesByIds} = require('../modules/movies')
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

module.exports = {
    movies, moviesByIds
}