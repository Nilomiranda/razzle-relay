import React, { useState, useTransition } from 'react';
import styled from 'styled-components';
// import { useHistory } from 'react-router-dom';
import { match } from 'react-suspense-router';
import RepositoryList from "./components/Repository/RepositoryList";
import SearchBar from "./components/SearchBar/SearchBar";
import UserCard from "./components/UserCard/UserCard";
import { useRefetchableFragment, preloadQuery } from "react-relay/hooks";
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
  const [repositories, setRepositories] = useState([]);
  const [startTransition] = useTransition();
  // const history = useHistory();

  const [data, refetch] = useRefetchableFragment(
    graphql`  
      fragment Home_user on Query
      @refetchable(queryName: "UserRefetchQuery") {
          user(login: $owner) {
              ...UserCard_user
          }
      }
    `, props.data
  )

  const handleChange = text => {
    setRepoOwner(text);
  }

  const handleSearch = () => {
    const searchParams = repoOwner;
    startTransition(() => {
      refetch({ owner: searchParams }, { fetchPolicy: 'store-or-network', onComplete: () => console.log('repositories', repositories) })

      setRepositories(data);
    })
  }

  const handleUserCardClick = userLogin => {
    history.push(`/user/${userLogin}`);
  }

  return (
    <MainContainer>
      <SearchBar onChange={(text) => handleChange(text)} onSearchSubmit={handleSearch}/>
      {
        data ? <UserCard user={data.user} click={login => handleUserCardClick(login)}/> : ''
      }
    </MainContainer>
  )
}

export default Home;