import React from 'react';
import styled from 'styled-components';
import { usePreloadedQuery, useFragment, graphql } from 'react-relay/hooks';
import { Link } from 'react-suspense-router';


// styles
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  just-content: space-between;
  border-radius: 4pt;
  width: 50%;
  padding: 20px 20px;
  box-shadow: 0 20px 20px lightgrey;
  
  img {
    border-radius: 50%;
    width: 7rem;
    height: 7rem;
    margin: 20px;
  }
  
  strong, small {
    margin-bottom: 20px;
  }
  
  p {
    font-size: 14px;
    color: #555;
  }
`

const CardLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: unset;
`;

const UserCard = ({ data, query }) => {
  const { user } = usePreloadedQuery(
    query,
    data
  );

  const loadedUser = useFragment(
    graphql`
        fragment UserCardComponent_user on User {
            login
            name
            avatarUrl
            bio
            email
            following {
                totalCount
            }
            followers {
                totalCount
            }
        }
    `, user
  )

  return (
    <CardLink to={`/user/${loadedUser.login}`}>
      <MainContainer>
        <img src={loadedUser.avatarUrl}/>
        <strong>{loadedUser.name}</strong>
        <small>{loadedUser.login}</small>

        <p>{loadedUser.bio}</p>
      </MainContainer>
    </CardLink>
  )
}

export default UserCard;