import React from 'react';
import styled from 'styled-components';

import RepositoryList from "./components/Repository/RepositoryList";
import SearchBar from "./components/SearchBar/SearchBar";

// STYLES

const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  h1 {
    color: #F00;
  }
`;

const Home = () => {
  return (
    <MainContainer>
      <SearchBar />
      <RepositoryList />
    </MainContainer>
  )
}

export default Home;