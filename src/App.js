import React, { Suspense } from 'react';
const Home = React.lazy(() => import('./Home'));
const User = React.lazy(() => import('./User'));
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import environment from "./config/RelayEnvironment";
import { Routes, LazyFetcher, Route } from 'react-suspense-router';
import './App.css';

const fetchUserData = LazyFetcher(() => import('./UserData'));

const App = () => (
  <RelayEnvironmentProvider environment={environment}>
    <Suspense fallback={<strong>Loading...</strong>}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/user/:login" fetchData={fetchUserData} element={<User />} />
      </Routes>
    </Suspense>
  </RelayEnvironmentProvider>
);

export default App;
