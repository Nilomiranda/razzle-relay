import App from './App';
// import {BrowserRouter} from 'react-router-dom';
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-suspense-router';
import { hydrate, createBlockingRoot } from 'react-dom';
import { loadableReady } from '@loadable/component';

loadableReady(() => {

  // createBlockingRoot(
  //   document.getElementById('root')
  //   , {  hydrate: true }
  // ).render(
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // )

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
