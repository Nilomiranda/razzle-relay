import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import './App.css';

import { RelayEnvironmentProvider } from 'react-relay/hooks';
import environment from "./config/RelayEnvironment";
import User from "./User";
import Loading from "./components/Loading/Loading";

const App = () => (
  <RelayEnvironmentProvider environment={environment}>
    <Switch>
      {/*<Suspense fallback={<Loading />}>*/}
        <Route exact path="/" component={Home} />
      {/*</Suspense>*/}
      {/*<Suspense fallback={<Loading loadingText="Loading user repositories..."/>}>*/}
        <Route path="/user/:userLogin" component={User}/>
      {/*</Suspense>*/}
    </Switch>
  </RelayEnvironmentProvider>
);

export default App;
