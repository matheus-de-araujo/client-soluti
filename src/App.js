import React from 'react';
import { Router } from 'react-router-dom';

import { Container } from 'reactstrap';
import './App.css';

import { AuthProvider } from './Context/AuthContext';

import history from './history';
import Routes from './routes';

function App() {
  return (
    <Container id="Container" > 
      <AuthProvider>
        <Router history={history}>
          <Routes />
        </Router>
      </AuthProvider>
    </Container>
  );
}

export default App;
