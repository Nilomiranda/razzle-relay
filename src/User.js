import React, { Suspense } from 'react';
import RepositoryList from "./components/Repository/RepositoryList";
import { usePreloadedQuery, preloadQuery, useRelayEnvironment, graphql } from 'react-relay/hooks';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

// styles
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const User = () => {
  console.log(`hi from user`)
  const environment = useRelayEnvironment();

  const query = graphql`
      query UserQuery($login: String!) {
          user (login: $login) {
              repositories (first: 10) {
                  edges {
                      node {
                          description
                          name
                          id
                      }
                  }
              }
          }
      }
  `

  const { userLogin } = useParams();
  console.log(userLogin)

  const result = preloadQuery(
    environment,
    query,
    { login: userLogin },
    { fetchPolicy: 'store-or-network' },
  )
  const res = usePreloadedQuery(query, result);

  console.log(res);

  return (
    <MainContainer>
      <h1>{userLogin} repositories</h1>
      <RepositoryList repositories={res && res.user.repositories.edges} />
    </MainContainer>
  )
}

export default User;
