import App from './App';
import {BrowserRouter} from 'react-router-dom';
import React, { Suspense } from 'react';
import { hydrate } from 'react-dom';
import { loadableReady } from '@loadable/component';

loadableReady(() => {

  hydrate(
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <App />
      </Suspense>
    </BrowserRouter>,
    document.getElementById('root')
  );

  if (module.hot) {
    module.hot.accept();
  }

})
