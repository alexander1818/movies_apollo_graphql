const {IMAGE_BASE_PATH} = require('../../../config')
const {format} = require('date-fns')

class Movie {
    constructor(movie) {
        this.id = movie.id;
        this.title = movie.title;
        this.releaseDate = movie.release_date;
        this.posterPath = `${IMAGE_BASE_PATH}${movie.poster_path}`;
        this.originalTitle = movie.original_title;
        this.originalLanguage = movie.original_language;
        this.adult = movie.adult;
        this.overview = movie.overview;
        this.popularity = movie.popularity;
        this.voteCount = movie.vote_count;
        this.voteAverage = movie.vote_average;
        this.video = movie.video;
        this.genre_ids = movie.genre_ids.map((id) => +id)
    }

    releaseDate(params) {
        return params.format
            ? format(new Date(this.movie.release_date), params.format)
            : this.movie.release_date
    }
}

module.exports = {
    Movie
}
