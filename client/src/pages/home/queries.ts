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
