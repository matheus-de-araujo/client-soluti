import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Users from './pages/Users';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/users" component={Users} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
)


export default Routes;