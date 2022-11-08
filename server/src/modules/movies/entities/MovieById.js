const {IMAGE_BASE_PATH} = require('../../../config')
const {format} = require('date-fns')

class Genre {
    constructor(genre) {
        this.id = genre.id;
        this.name = genre.name;
    }
}

class ProductionCompanies {
    constructor(company) {
        this.id = company.id;
        this.name = company.name;
        this.logo_path = company.logo_path;
        this.origin_country = company.origin_country
    }
}

class ProductionCountry {
    constructor(country) {
        this.name = country.name;
        this.iso_3166_1 = country.iso_3166_1;
    }
}

class SpokenLangs {
    constructor(language) {
        this.name = language.name;
        this.iso_639_1 = language.iso_639_1;
    }
}

class MovieById {
    constructor(movie) {
        this.adult = movie.adult;
        this.backdropPath = `${IMAGE_BASE_PATH}${movie.backdrop_path}`;
        this.budget = movie.budget;
        this.genres = movie.genres.map((genre) => new Genre(genre));
        this.homepage = movie.homepage;
        this.id = movie.id;
        this.imdb_id = movie.imdb_id;
        this.originalLanguage = movie.original_language;
        this.originalTitle = movie.original_title;
        this.overview = movie.overview;
        this.popularity = movie.popularity;
        this.posterPath = `${IMAGE_BASE_PATH}${movie.poster_path}`;
        this.productionCompanies = movie.production_companies.map((company) => new ProductionCompanies(company));
        this.productionCountries = movie.production_countries.map((country) => new ProductionCountry(country));
        this.releaseDate = movie.release_date;
        this.revenue = movie.revenue;
        this.runtime = movie.runtime;
        this.spokenLanguages = movie.spoken_languages.map((language) => new SpokenLangs(language));
        this.tagline = movie.tagline;
        this.title = movie.title;
        this.video = movie.video;
        this.voteAverage = movie.vote_average;
        this.voteCount = movie.vote_count;
    }

    releaseDate(params) {
        return params.format
            ? format(new Date(this.movie.release_date), params.format)
            : this.movie.release_date
    }
}

module.exports = {
    MovieById
}
