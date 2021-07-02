import React, { useState, useEffect, useContext } from 'react';

import api from '../api';
import { Context } from '../Context/AuthContext';

export default function Users() {
  const { handleLogout } = useContext(Context);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/user/1');
      console.log(data.name);
      setUsers(data);
    })();
  }, []);

  return (
    <>
      {/* <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul> */}

      <button type="button" onClick={handleLogout}>Sair</button>
    </>
  );
}
