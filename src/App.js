import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import './App.css';

import { RelayEnvironmentProvider } from 'react-relay/hooks';
import environment from "./config/RelayEnvironment";
import User from "./User";
import Loading from "./components/Loading/Loading";
import { graphql } from 'react-relay';
import { preloadQuery } from 'react-relay/hooks';

const UserQuery = graphql`
    query UserQuery($login: String!) {
        user (login: $login) {
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

const App = () => (
  <RelayEnvironmentProvider environment={environment}>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/user/:userLogin"
        children={routeProps => {
          const { match: { params: { userLogin } } } = routeProps;

          const res = preloadQuery(
            environment,
            UserQuery,
            { login: userLogin },
            { fetchPolicy: 'store-or-network' }
          )

          return (
            <User query={ UserQuery } preloadedRes={res}/>
          )
        }}
      >
      </Route>
    </Switch>
  </RelayEnvironmentProvider>
);

export default App;
