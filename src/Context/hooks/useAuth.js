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
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);
  
  async function handleLogin() {
    var auth = {
      email: 'rodolfo@gmail.com',
      password: '987654321'
    }

    const token = await api.post('/login', auth);

    localStorage.setItem('token', JSON.stringify(token));

    api.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticated(true);
    history.push('/user');
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    history.push('/login');
  }
  
  return { authenticated, loading, handleLogin, handleLogout };
}