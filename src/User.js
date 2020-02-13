import React, { Suspense } from 'react';
import RepositoryList from "./components/Repository/RepositoryList";
import styled from 'styled-components';
import { useParams, useRouteData, useRouteDataSelector } from 'react-suspense-router';
import { usePreloadedQuery } from 'react-relay/hooks';
import UserQuery from './Queries/User';

// styles
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const User = (props) => {
  console.log('User -> props -> ', props);
  const userData = useRouteData();
  const { login } = useParams();

  console.log('UserData -> ', userData);

  const data = usePreloadedQuery(UserQuery, userData);

  console.log('User -> data -> ', data);

  return (
    <MainContainer>
      <h1>{ login } repositories</h1>
      <RepositoryList repositories={data && data.user.repositories.edges} />
    </MainContainer>
  )
}

export default User;
