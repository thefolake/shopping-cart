import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://pangaea-interviews.now.sh/api/graphql',
    cache: new InMemoryCache()
});

// client
//     .query({
//         query: gql`
//       query GetRates {
//         products {
//           id
//           title
//           image_url
//         }
//       }
//     `
//     })
//     .then(result => console.log(result));

const ApolloRequestClient = ({ children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloRequestClient;




