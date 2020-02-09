import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

import fetch from "node-fetch";

/**
 * In order to work with github graphql API you need
 * a personal access token. Follow the instructions from
 * the link below:
 * https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line
 */
const GITHUB_PERSONAL_ACCESS_TOKEN = ''

function fetchQuery(
  operation,
  variables,
) {
  return fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GITHUB_PERSONAL_ACCESS_TOKEN}`
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;