import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

export default function Register () {

  const [data, setData] = useState({
    email: "",
    password: ""
  })

  function handleSubmit(e){
  }

  function submit(e){
  }

  return(
    <Container> 
      <Form onSubmit={(e) => submit(e)}>  
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" onChange={(e) => handleSubmit(e)} id="email" value={data.name} placeholder="Digite seu Email" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Senha</Label>
          <Input type="password" onChange={(e) => handleSubmit(e)} id="password" value={data.password} placeholder="Digite sua Senha" />
        </FormGroup>
        <Button id="logar" >Logar</Button>
      </Form>
      <Button id="register">Cadastrar</Button>
    </Container>
  );
}