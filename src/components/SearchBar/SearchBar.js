import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  margin: 20px 0;
  
  input {
    border: none;
    width: 150px;
    background: #eee;
    font-weight: bolder;
    font-size: 14px;
    padding: 10px 30px 10px 10px;
    outline-color: lightpink;
  }
  
  button {
    border: none;
    background: lightpink;
    padding: 10px 20px;
    color: #FFF;
    font-weight: bolder;
    font-size: 14px;
  }
`

const SearchBar = ({ onChange, onSearchSubmit }) => {
  const handleTextChange = event => {
    const { data } = event;
    onChange(data);
  }

  const handleButtonClick = () => {
    onSearchSubmit();
  }

  return (
    <MainContainer>
      <input type="text" placeholder="Type a Github user" onChange={() => handleTextChange(event)}/>
      <button onClick={() => handleButtonClick()}>Search</button>
    </MainContainer>
  )
}

export default SearchBar;
