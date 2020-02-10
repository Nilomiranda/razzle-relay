import React, { Suspense } from 'react';
import styled from 'styled-components';
import { graphql, useFragment } from 'react-relay/hooks';

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

const UserCard = ({ user }) => {
  console.log('UserCard -> user -> ', user)
  const data = useFragment(
    graphql`
        fragment UserCard_user on User {
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
    <MainContainer>
      <img src={data && data.avatarUrl}/>
      <strong>{data && data.name}</strong>
      <small>{data && data.login}</small>

      <p>{data && data.bio}</p>
    </MainContainer>
  )
}

export default UserCard;