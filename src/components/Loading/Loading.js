import React from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  
  strong {
    font-size: 18px;
    font-weight: bolder;
    color: #F00;
  }
`;

const Loading = ({ loadingText }) => {
  return (
    <LoadingContainer>
      <strong>{ loadingText || '...loading...' }</strong>
    </LoadingContainer>
  )
}

export default Loading;