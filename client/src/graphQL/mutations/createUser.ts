import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  #  query newUser($input: UserInput) {
  #    newUser(input: $input) {
  #      id
  #      userName
  #      age
  #    }
  #  }
`;
