import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from './Context/AuthContext';

import Home from './pages/home';
import Login from './pages/login';
import User from './pages/user';
import Register from './pages/register';
import Certificate from './pages/certificate';
import ShowCertificate from './pages/showCertificate';

function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />
  }

  return <Route {...rest} />;
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/" component={Home} />
      <CustomRoute exact path="/login" component={Login} />
      <CustomRoute exact path="/register" component={Register} />
      <CustomRoute isPrivate exact path="/certificate" component={Certificate} />
      <CustomRoute isPrivate exact path="/show-certificate" component={ShowCertificate} />
      <CustomRoute isPrivate exact path="/user" component={User} />
    </Switch>
  );
}