import React from 'react';
import styled from 'styled-components';
import { graphql, useFragment } from 'react-relay/hooks';

// styles
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  just-content: space-between;
  border: 1px solid #222;
  border-radius: 4pt;
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
    </MainContainer>
  )
}

export default UserCard;