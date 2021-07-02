import React, { useEffect, useContext } from 'react';

import api from '../api';
import { Context } from '../Context/AuthContext';

export default function User() {
  const { handleLogout } = useContext(Context);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/user/1');
      console.log(data.name);
    })();
  }, []);

  return (
    <>
      <button type="button" onClick={handleLogout}>Sair</button>
    </>
  );
}
