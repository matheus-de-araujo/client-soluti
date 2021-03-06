import React, { useState, useEffect, useContext } from 'react';

import api from '../api';
import { Context } from '../Context/AuthContext';
import { Table, Container, Button } from 'reactstrap';
import './css/button.css';

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
    <Container>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Cpf</th>
          <th>Data de Nascimento</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {User.map(user => {
          return(
            <tr key={user.id} >
              <td>{ user.id }</td>
              <td>{ user.name }</td>
              <td>{ user.cpf }</td>
              <td>{ user.birthday }</td>
              <td>{ user.email }</td>
            </tr>
          );
        })}
      </tbody>
      </Table>
      <div id="div">  
        <a id="a-form" href="/certificate" type="button">Cadastrar Certificado</a>
        <a id="a-form" href="/show-certificate" type="button">Mostrar Certificado</a>
        <Button id="button-form" type="button" onClick={handleLogout}>Sair</Button>
      </div>
    </Container>
  );
}