import { match } from 'react-suspense-router';
import { preloadQuery, graphql } from 'react-relay/hooks';
import environment from "./config/RelayEnvironment";
import UserQuery from './Queries/User';


const fetchUserData = async (match) => {
  const user = match.params.login;
  console.log(user);
  const result = preloadQuery(
    environment,
    UserQuery,
    { login: user },
    { fetchPolicy: 'store-or-network' }
  )

  return result;
}

export default fetchUserData;