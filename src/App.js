import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import './App.css';

import { RelayEnvironmentProvider } from 'react-relay/hooks';
import environment from "./config/RelayEnvironment";

const App = () => (
  <RelayEnvironmentProvider environment={environment}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </RelayEnvironmentProvider>
);

export default App;
