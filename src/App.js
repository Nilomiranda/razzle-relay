import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import './App.css';

import { RelayEnvironmentProvider } from 'react-relay/hooks';
import environment from "./config/RelayEnvironment";
import User from "./User";

const App = () => (
  <RelayEnvironmentProvider environment={environment}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/user/:userLogin" component={User}/>
    </Switch>
  </RelayEnvironmentProvider>
);

export default App;
