import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      errors
      user {
        username
        firstName
        lastName
      }
    }
  }
`;

export const REGISTER = gql`
  mutation Register(
    $email: String!
    $username: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    register(
      email: $email
      username: $username
      password1: $password
      password2: $password
      firstName: $firstName
      lastName: $lastName
    ) {
      token
      errors
      success
    }
  }
`;
