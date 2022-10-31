import { gql } from '@apollo/client';

export const MOVIES_QUERY = gql`
  query Movies($page: Int) {
    movies(page: $page) {
      page
      totalPages
      totalResults
      results {
        #        voteAverage
        #        voteCount
        #        popularity
        #        overview
        #        adult
        posterPath
        releaseDate(format: "dd.MM.yyyy")
        title
        originalTitle
        #        originalLanguage
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
