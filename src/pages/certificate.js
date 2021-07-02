import React from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function Certificate ()  {
  return (
    <div>
      <h1> Cadastre seu Certificado </h1>
      <Form>  
        <FormGroup>
          <label for="certificate">Envie seu Certificado</label>
          <Input type="file" accept=".pem" id="certificate" />
        </FormGroup>

        <Button id="button-form">Cadastrar Certificado</Button>
        <a id="a-form" href="/user" >Voltar</a>
      </Form>
    </div>
  );
}