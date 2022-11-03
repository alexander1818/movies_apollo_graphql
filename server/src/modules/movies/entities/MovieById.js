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
        this.backdrop_path = `${IMAGE_BASE_PATH}${movie.backdrop_path}`;
        this.budget = movie.budget;
        this.genres = movie.genres.map((genre) => new Genre(genre));
        this.homepage = movie.homepage;
        this.id = movie.id;
        this.imdb_id = movie.imdb_id;
        this.original_language = movie.originalLanguage;
        this.original_title = movie.original_title;
        this.overview = movie.overview;
        this.popularity = movie.popularity;
        this.poster_path = `${IMAGE_BASE_PATH}${movie.poster_path}`;
        this.production_companies = movie.production_companies.map((company) => new ProductionCompanies(company));
        this.production_countries = movie.production_countries.map((country) => new ProductionCountry(country));
        this.release_date = movie.release_date;
        this.revenue = movie.revenue;
        this.runtime = movie.runtime;
        this.spoken_languages = movie.spoken_languages.map((language) => new SpokenLangs(language));
        this.tagline = movie.tagline;
        this.title = movie.title;
        this.video = movie.video;
        this.vote_average = movie.vote_average;
        this.vote_count = movie.vote_count;
    }

    release_date(params) {
        return params.format
            ? format(new Date(this.movie.release_date), params.format)
            : this.movie.release_date
    }
}

module.exports = {
    MovieById
}
