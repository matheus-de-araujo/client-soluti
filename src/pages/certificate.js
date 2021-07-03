import React from 'react';

import { Button, Form, Label, FormGroup, Input } from 'reactstrap';
import api from '../api';
import history from '../history';

export default function Certificate ()  {
  function submit(e){
    e.preventDefault();

    var user = JSON.parse(localStorage.getItem('user'));

    const data = new FormData();
    data.append("certificate", document.getElementById('certificate').files[0]);
    data.append("user_id", user.id);

    api.post('certificate', data)
      .then(function(response) {
        alert(response.data.Response + ' | Status: ' + response.status);
        history.push('/show-certificate');
      })
      .catch(function(error) {
        alert(error);
      }
    );
  }

  return (
    <div>
      <h1> Cadastre seu Certificado </h1>
      <Form onSubmit={(e) => submit(e)}>  
        <FormGroup>
          <Label for="certificate">Envie seu Certificado</Label>
          <Input type="file" accept=".pem" id="certificate" />
        </FormGroup>

        <Button id="button-form">Cadastrar Certificado</Button>
        <a id="a-form" href="/user" >Voltar</a>
      </Form>
    </div>
  );
}