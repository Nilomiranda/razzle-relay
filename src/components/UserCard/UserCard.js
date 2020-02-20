import React from 'react';
import styled from 'styled-components';
import { usePreloadedQuery } from 'react-relay/hooks';
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

const UserCard = ({ data, click, query }) => {
  const { user } = usePreloadedQuery(
    query,
    data
  );

  return (
    <CardLink to={`/user/${user && user.login}`}>
      <MainContainer onClick={() => {
        click && click(user.login)
      }}>
        <img src={user && user.avatarUrl}/>
        <strong>{user && user.name}</strong>
        <small>{user && user.login}</small>

        <p>{user && user.bio}</p>
      </MainContainer>
    </CardLink>
  )
}

export default UserCard;