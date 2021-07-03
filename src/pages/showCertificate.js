import React, { useState, useEffect } from 'react';

import api from '../api';
import { Table, Container, Button } from 'reactstrap';
import './css/button.css';
import { Endpoint } from "axios-endpoints";

export default function ShowCertificate() {

  const [Certificate, setCertificate] = useState([]);

  useEffect(() => {
    (async () => {

      var user = JSON.parse(localStorage.getItem('user'));

      const data = await api.get('certificate/' + user.id);

      setCertificate(data.data);
    })();
  }, []);

  return (
    <Container>
      <ul>  
        <li></li>
      </ul>

      <a id="a-form" href="/certificate" type="button">Cadastrar Certificado</a>
      <a id="a-form" href="/show-certificate" type="button">Mostrar Certificado</a>
      {/* <Button id="button-form" type="button" onClick={handleLogout}>Sair</Button> */}
    </Container>
  );
}