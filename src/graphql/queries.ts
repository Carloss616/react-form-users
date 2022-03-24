import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    users {
      _id
      firstName
      lastName
      email
      note
    }
  }
`;
