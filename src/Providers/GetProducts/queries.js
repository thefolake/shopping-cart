import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query ($currency: Currency) {
      products {
         id
         title
         image_url
         price (currency: $currency)
      }
  }
`;

export const CURRENCY = gql`
    query {
        currency
    }
`;