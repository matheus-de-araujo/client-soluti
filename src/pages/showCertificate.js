import React, { useState, useEffect } from 'react';

import api from '../api';
import { Container } from 'reactstrap';
import './css/button.css';
import history from '../history';

export default function ShowCertificate() {

  const [Certificate, setCertificate] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {

      var user = JSON.parse(localStorage.getItem('user'));

      const data = await api.get('certificate/' + user.id)
        .catch(function(error) {
          alert("Certificado não encontrado: Cadastre seu certificado");
          history.push('/certificate');
        });
        
        setCertificate(data.data);
        setLoading(false);
    })();
  }, []);

  if (loading) {
    return <span>Loading...</span>
  }

  return (
    <Container>
      <h1> DN </h1>
      <ul>  
        {Certificate.DN.rdnSequence.map((dn,idx) => {
          return(
            <li key={idx} > { dn[0].type } = { dn[0].value.printableString } </li>
          );
        })}
      </ul>

      <h1> IssuerDN </h1>
      <ul>  
        {Certificate.issuerDN.rdnSequence.map((dn,idx) => {
          return(
            <li key={idx} > { dn[0].type } = { dn[0].value.printableString } </li>
          );
        })}
      </ul>

      <h1> Validity </h1>
      <ul>  
        <li> "Não antes" = { Certificate.validity.notAfter.utcTime } </li>
        <li> "Não depois" = { Certificate.validity.notBefore.utcTime } </li>
      </ul>

      <a id="a-form" href="/user" type="button">Voltar para User</a>
    </Container>
  );
}