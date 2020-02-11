import React from 'react';

import RepositoryItem from './RepositoryItem';

const RepositoryList = ({ repositories }) => {

  return repositories.map(repo => {
    return <RepositoryItem repository={repo} key={repo.node.id}/>
  })
}

export default RepositoryList;