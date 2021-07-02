import React, { useState, useEffect, useContext } from 'react';

import api from '../api';
import { Context } from '../Context/AuthContext';
import Table_user from './../components/Table'

export default function User() {
  const { handleLogout } = useContext(Context);
  const [User, setUser] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await api.get('/user');
      setUser(data.data);
    })();
  }, []);

  return (
    <>
      <Table_user user="User" />
      <button type="button" onClick={handleLogout}>Sair</button>
    </>
  );
}