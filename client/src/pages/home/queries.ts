import { gql } from '@apollo/client';

export const MOVIES_QUERY = gql`
  query Movies($page: Int) {
    movies(page: $page) {
      page
      totalPages
      totalResults
      results {
        voteAverage
        voteCount
        popularity
        overview
        adult
        genre_ids
        posterPath
        releaseDate(format: "dd.MM.yyyy")
        title
        originalTitle
        originalLanguage
        id
      }
    }
  }
`;

export const MOVIES_BY_IDS_QUERY = gql`
  query MoviesByIds($ids: [Int]) {
    moviesByIds(ids: $ids) {
      id
      title
      originalTitle
      originalLanguage
      releaseDate
      posterPath
      adult
      overview
      popularity
      video
      voteCount
      voteAverage
      genres {
        id
        name
      }
    }
  }
`;

export const MOVIE_BY_ID_QUERY = gql`
  query MovieByID($id: Int) {
    movieByID(id: $id) {
      adult
      backdropPath
      budget
      genres {
        id
        name
      }
      homepage
      id
      imdbId
      originalLanguage
      originalTitle
      overview
      popularity
      posterPath
      productionCompanies {
        id
        name
        logo_path
        origin_country
      }
      productionCountries {
        name
        iso_3166_1
      }
      releaseDate
      revenue
      runtime
      spokenLanguages {
        name
        iso_639_1
      }
      tagline
      title
      video
      voteAverage
    }
  }
`;

export const SIMAILAR_MOVIES_QUERY = gql`
  query similarMovies($id: Int) {
    similarMovies(id: $id) {
      page
      totalPages
      totalResults
      results {
        voteAverage
        voteCount
        popularity
        overview
        adult
        #        genre_ids
        posterPath
        releaseDate(format: "dd.MM.yyyy")
        title
        originalTitle
        originalLanguage
        id
      }
    }
  }
`;
