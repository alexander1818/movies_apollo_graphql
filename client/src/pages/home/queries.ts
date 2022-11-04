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
    }
  }
`;

export const MOVIES_BY_ID_QUERY = gql`
  query MovieByID($id: Int) {
    movieByID(id: $id) {
      adult
      backdrop_path
      budget
      genres {
        id
        name
      }
      homepage
      id
      imdb_id
      original_language
      original_title
      overview
      popularity
      poster_path
      production_companies {
        id
        name
        logo_path
        origin_country
      }
      production_countries {
        name
        iso_3166_1
      }
      release_date
      revenue
      runtime
      spoken_languages {
        name
        iso_639_1
      }
      tagline
      title
      video
      vote_average
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
