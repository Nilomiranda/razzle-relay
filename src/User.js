import React, { Suspense } from 'react';
import RepositoryList from "./components/Repository/RepositoryList";
import { usePreloadedQuery, preloadQuery, useRelayEnvironment, graphql } from 'react-relay/hooks';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import environment from "./config/RelayEnvironment";

// styles
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const User = (props) => {
  console.log('User -> props -> ', props);
  return (
    <MainContainer>
      <h1>{userLogin || 'Someone'} repositories</h1>
      <RepositoryList repositories={res && res.user.repositories.edges} />
    </MainContainer>
  )
}

export default User;
