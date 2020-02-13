import { match } from 'react-suspense-router';
import { preloadQuery, graphql } from 'react-relay/hooks';
import environment from "./config/RelayEnvironment";

const fetchUserData = async (match) => {
  const user = match.params.login;

  const query = graphql`
    query UserDataQuery {
      user (login: "Nilomiranda") {
        repositories (first: 10) {
          edges {
            node {
              description
              name
              id
            }
          }
        }
      }
    }
  `

  const result = preloadQuery(
    environment,
    query,
    { owner: user },
    { fetchPolicy: 'store-or-network' }
  )

  return result;
}

export default fetchUserData;