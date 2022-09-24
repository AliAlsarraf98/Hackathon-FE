import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation register(
    $email: String!
    $username: String!
    $firstName: String!
    $lastName: String!
    $password: String!
  ) {
    register(
      email: $email
      username: $username
      firstName: $firstName
      lastName: $lastName
      password1: $password
      password2: $password
    ) {
      success
      errors
      token
    }
  }
`;

export const LOGIN = gql`
  mutation login($password: String!, $email: String!) {
    login(password: $password, email: $email) {
      token
      success
      errors
      user {
        username
        firstName
        lastName
        email
      }
    }
  }
`;

export const CREATE_COMPANY = gql`
  mutation createCompany($budget: String!, $name: String!) {
    createCompany(budget: $budget, name: $name) {
      company {
        id
        name
        budget
      }
    }
  }
`;

export const CREATE_RECORD = gql`
  mutation createRecorde($company: Int!, $month: String!, $year: String!) {
    createRecorde(company: $company, month: $month, year: $year) {
      recorde {
        id
        year
        month
      }
    }
  }
`;

export const CREATE_INCOME = gql`
  mutation createIncome(
    $recorde: Int!
    $name: String!
    $isOneTime: Boolean!
    $details: String!
    $amount: String!
  ) {
    createIncome(
      amount: $amount
      details: $details
      isOneTime: $isOneTime
      name: $name
      recorde: $recorde
    ) {
      income {
        id
        name
        amount
        details
        isOneTime
      }
    }
  }
`;

export const CREATE_OUTCOME = gql`
  mutation createOutcome(
    $amount: String!
    $details: String!
    $isOneTime: Boolean!
    $name: String!
    $recorde: Int!
  ) {
    createOutcome(
      amount: $amount
      details: $details
      isOneTime: $isOneTime
      name: $name
      recorde: $recorde
    ) {
      outcome {
        id
        name
        amount
        details
        isOneTime
      }
    }
  }
`;

export const EDIT_COMPANY = gql`
  mutation editCompany($id: Int!, $budget: String!, $name: String!) {
    editCompany(budget: $budget, name: $name, pk: $id) {
      company {
        id
        name
        budget
      }
    }
  }
`;

export const EDIT_RECORD = gql`
  mutation editRecorde($id: Int!, $month: String!, $year: String!) {
    editRecorde(month: $month, year: $year, pk: $id) {
      recorde {
        id
        year
        month
      }
    }
  }
`;

export const EDIT_INCOME = gql`
  mutation editIncome(
    $id: Int!
    $name: String!
    $isOneTime: Boolean!
    $details: String!
    $amount: String!
  ) {
    editIncome(
      amount: $amount
      details: $details
      isOneTime: $isOneTime
      name: $name
      pk: $id
    ) {
      income {
        id
        name
        amount
        details
        isOneTime
      }
    }
  }
`;

export const EDIT_OUTCOME = gql`
  mutation editOutcome(
    $id: Int!
    $amount: String!
    $details: String!
    $isOneTime: Boolean!
    $name: String!
  ) {
    editOutcome(
      amount: $amount
      details: $details
      isOneTime: $isOneTime
      name: $name
      pk: $id
    ) {
      outcome {
        id
        name
        amount
        details
        isOneTime
      }
    }
  }
`;

export const DELETE_COMPANY = gql`
  mutation deleteCompany($id: Int!) {
    deleteCompany(pk: $id) {
      status
    }
  }
`;

export const DELETE_RECORD = gql`
  mutation deleteRecorde($id: Int!) {
    deleteRecorde(pk: $id) {
      status
    }
  }
`;

export const DELETE_INCOME = gql`
  mutation deleteIncome($id: Int!) {
    deleteIncome(pk: $id) {
      status
    }
  }
`;

export const DELETE_OUTCOME = gql`
  mutation deleteOutcome($id: Int!) {
    deleteOutcome(pk: $id) {
      status
    }
  }
`;
