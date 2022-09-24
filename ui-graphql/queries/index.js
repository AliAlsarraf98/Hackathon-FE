import { gql } from "@apollo/client";

export const GET_COMPANIES = gql`
  query getCompanies {
    getCompanies {
      id
      name
      budget
      recordeSet {
        id
        year
        month
        netProfit
        incTotal
        outTotal
        incomeSet {
          id
          name
          amount
          details
          isOneTime
        }
        outcomeSet {
          id
          name
          amount
          details
          isOneTime
        }
      }
    }
  }
`;

export const GET_COMPANY = gql`
  query getCompany($id: Int!) {
    getCompany(Id: $id) {
      id
      name
      budget
      recordeSet {
        id
        year
        month
        netProfit
        incTotal
        outTotal

        incomeSet {
          id
          details
          name
          amount
          isOneTime
        }
        outcomeSet {
          id
          details
          name
          amount
          isOneTime
        }
      }
    }
  }
`;

export const GET_RECORDS = gql`
  query getRecords {
    getRecordes {
      id
      year
      month
      netProfit
      incTotal
      outTotal
      company {
        id
        name
        budget
      }
      incomeSet {
        id
        name
        amount
        details
        isOneTime
      }
      outcomeSet {
        id
        name
        amount
        details
        isOneTime
      }
    }
  }
`;

export const GET_RECORD = gql`
  query getRecorde($id: Int!) {
    getRecorde(Id: $id) {
      id
      year
      month
      netProfit
      incTotal
      outTotal
      company {
        id
        name
        budget
      }
      incomeSet {
        id
        name
        amount
        details
        isOneTime
      }
      outcomeSet {
        id
        name
        amount
        details
        isOneTime
      }
    }
  }
`;

export const GET_INCOMES = gql`
  query getIncomes {
    getIncomes {
      id
      name
      amount
      details
      recorde {
        id
        year
        month
        company {
          id
          name
          budget
        }
      }
      isOneTime
    }
  }
`;

export const GET_INCOME = gql`
  query getIncome($id: Int!) {
    getIncome(Id: $id) {
      id
      name
      amount
      details
      recorde {
        id
        year
        month
        company {
          id
          name
          budget
        }
      }
      isOneTime
    }
  }
`;

export const GET_OUTCOMES = gql`
  query getOutcomes {
    getOutcomes {
      id
      name
      amount
      details
      recorde {
        id
        year
        month
        company {
          id
          name
          budget
        }
      }
      isOneTime
    }
  }
`;

export const GET_OUTCOME = gql`
  query getOutcome($id: Int!) {
    getOutcome(Id: $id) {
      id
      name
      amount
      details
      recorde {
        id
        year
        month
        company {
          id
          name
          budget
        }
      }
      isOneTime
    }
  }
`;
