import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import User from './pages/user';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/user" component={User} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
)


export default Routes;