import React from 'react';
import styled from 'styled-components';

const Item = styled.strong`
  color: #777;
  font-size: 20px;
  margin: 20px 0;
`

const RepositoryItem = ({ repository }) => {
  return (
    <Item>{ repository.node.name }</Item>
  )
}

export default RepositoryItem;
