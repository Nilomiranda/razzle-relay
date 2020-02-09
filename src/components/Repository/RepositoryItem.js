import React from 'react';

const RepositoryItem = ({ repository }) => {
  return (
    <h1>{ repository.node.name }</h1>
  )
}

export default RepositoryItem;
