import React from 'react';
import styled from 'styled-components';

// STYLES

const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  
  h1 {
    color: #F00;
  }
`;

const Home = () => {
  return (
    <MainContainer>
      <h1>Hi</h1>
    </MainContainer>
  )
}

export default Home;