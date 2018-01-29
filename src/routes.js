import React from 'react';
import { Route, Redirect, BrowserRouter } from 'react-router-dom';

import App from './App';

const Routes = props => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={App}></Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </div>
    </BrowserRouter>
  )
}

export default Routes
