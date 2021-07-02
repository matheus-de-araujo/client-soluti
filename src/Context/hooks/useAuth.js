import { useState, useEffect } from 'react';

import api from '../../api';
import history from '../../history';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      console.debug('Cache', authenticated);
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);
  
  async function handleLogin(email, password) {
    
    var auth = {
      email: email,
      password: password
    }
    const data = await api.post('/login', auth);
    const token = data.data.token;

    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${token}`;

    setAuthenticated(true);

    // history.push('/user');
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    history.push('/login');
  }
  
  return { authenticated, loading, handleLogin, handleLogout };
}