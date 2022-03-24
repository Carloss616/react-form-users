import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation AddUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $note: String!
  ) {
    addUser(
      user: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        note: $note
      }
    ) {
      _id
      firstName
      lastName
      email
      note
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($_id: String!) {
    deleteUser(_id: $_id)
  }
`;
