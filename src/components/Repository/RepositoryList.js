import React from 'react';

import RepositoryItem from './RepositoryItem';

const RepositoryList = ({ repositories }) => {
  if (!repositories || !repositories.length) {
    return <strong>Search for a Github user using the search bar above ☝️</strong>
  }

  console.log('repositories', repositories)

  return repositories.map(repo => {
    console.log('repo ->', repo)
    return <RepositoryItem repository={repo} />
  })
}

export default RepositoryList;