import React from 'react';
import { Router } from 'react-router-dom';

import { AuthProvider } from './Context/AuthContext';

import history from './history';
import Routes from './routes';

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
