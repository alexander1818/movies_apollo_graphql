import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($loginInput: LoginInput) {
    loginUser(loginInput: $loginInput) {
      username
      token
      email
    }
  }
`;
