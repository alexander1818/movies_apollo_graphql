import { gql } from '@apollo/client';

export const GOOGLE_LOGIN_USER = gql`
  query googleLoginUser {
    googleLoginUser {
      username
      token
      refreshToken
      email
    }
  }
`;
