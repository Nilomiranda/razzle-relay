import React, { Suspense } from 'react';
// import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import User from "./User";
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import environment from "./config/RelayEnvironment";
import { graphql } from 'react-relay';
import { Route, Routes, LazyFetcher, BrowserRouter } from 'react-suspense-router';
import './App.css';

const fetchUserData = LazyFetcher(() => import('./UserData'));

const App = () => (
  <RelayEnvironmentProvider environment={environment}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/user/:login" fetchData={fetchUserData}>
          <User />
        </Route>
      </Routes>
    </BrowserRouter>
  </RelayEnvironmentProvider>
);

export default App;
