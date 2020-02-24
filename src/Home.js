import React, { useState, Suspense } from 'react';
import styled from 'styled-components';
import SearchBar from "./components/SearchBar/SearchBar";
import UserCard from "./components/UserCard/UserCard";
import { preloadQuery, usePreloadedQuery } from "react-relay/hooks";
import {graphql} from "react-relay";
import environment from "./config/RelayEnvironment";

// STYLES

const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  h1 {
    color: #666;
    font-weight: bold;
    font-size: 16px;
  }
`;

const Home = (props) => {
  const [repoOwner, setRepoOwner] = useState('');
  const [preloadedData, setPreloadedData] = useState(null);

  const query = graphql`
      query HomeQuery ($owner: String!) {
          user (login: $owner) {
              ...UserCardComponent_user
          }
      }
  `;

  const handleChange = text => {
    setRepoOwner(text);
  }

  const handleSearch = () => {
    const searchParams = repoOwner;

    const data = preloadQuery(
      environment,
      query,
      { owner: searchParams },
      { fetchPolicy: 'store-or-network' }
    )

    console.log('data -> ', data)

    setPreloadedData(data);
  }

  return (
    <MainContainer>
      <SearchBar onChange={(text) => handleChange(text)} onSearchSubmit={handleSearch}/>
      {
        preloadedData ?
          <>
            { console.log('preloadedData -> ', preloadedData) }
            <Suspense fallback={<strong>Loading user...</strong>}>
              <UserCard data={preloadedData} query={query}/>
            </Suspense>
          </>
          : ''
      }
    </MainContainer>
  )
}

export default Home;