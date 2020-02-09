import React from 'react';
import { graphql } from 'react-relay';
import { usePreloadedQuery, preloadQuery, useRelayEnvironment } from 'react-relay/hooks';

import RepositoryItem from './RepositoryItem';

const RepositoryList = () => {
  const env = useRelayEnvironment();

  const query = graphql`
      query RepositoryListQuery ($owner: String!) {
          user (login: $owner) {
              login
              name  
              avatarUrl
              repositories (first: 10) {
                  edges {
                      node {
                          description
                          name
                      }
                  }
              }
          }
      }
  `;

  const res = preloadQuery(
    env,
    query,
    { owner: `Nilomiranda` },
    { fetchPolicy: 'store-or-network' }
  )

  const data = usePreloadedQuery(query, res);

  const { user } = data;
  const { repositories: { edges } } = user;

  return edges.map(edge => {
    return <RepositoryItem repository={edge.node.name} />
  })
}

export default RepositoryList;