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
  
  async function handleLogin(email, password) {
    
    var auth = {
      email: email,
      password: password
    }
    await api.post('/login', auth)
      .then(function (response) {

        const token = response.data.token;
        const user = response.data.user;

        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', JSON.stringify(token));

        api.defaults.headers.Authorization = `Bearer ${token}`;
        setAuthenticated(true);
        
        history.push('/user');

      })
      .catch(function (error) {
        if(!typeof response === "undefined") {
          alert('Erro: ' + error.response.data.error + ' | Status: ' + error.response.status);
        }
        else {
          alert(error);
        }

        history.push('/login');
      }
    );
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    history.push('/login');
  }
  
  return { authenticated, loading, handleLogin, handleLogout };
}