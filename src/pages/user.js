import React, { useState, useEffect, useContext } from 'react';

import api from '../api';
import { Context } from '../Context/AuthContext';

export default function User() {
  const { handleLogout } = useContext(Context);
  const [setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/user');

      setUsers(data);
    })();
  }, []);

  return (
    <>
      <button type="button" onClick={handleLogout}>Sair</button>
    </>
  );
}
