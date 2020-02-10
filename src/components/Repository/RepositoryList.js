import React from 'react';

import RepositoryItem from './RepositoryItem';

const RepositoryList = ({ repositories }) => {

  return repositories.map(repo => {
    return <RepositoryItem repository={repo} />
  })
}

export default RepositoryList;