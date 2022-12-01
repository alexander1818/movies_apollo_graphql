import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation registerUser($registerInput: RegisterInput) {
    registerUser(registerInput: $registerInput) {
      username
      email
      token
      refreshToken
    }
  }
`;
