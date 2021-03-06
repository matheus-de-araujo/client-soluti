import React, { useContext, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

import { Context } from '../Context/AuthContext';
import './css/button.css';

export default function Login() {
  const { handleLogin } = useContext(Context);

  const [data, setData] = useState({
    email: "",
    password: ""
  })

  function handleSubmit(e){
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  function submit(e){
    e.preventDefault();
    handleLogin(data.email, data.password);
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
        <Button id="button-form" type="submit" >Logar</Button>
        <a href="/register" id="a-form">Cadastrar</a>
        <a href="/" id="a-form">Voltar</a>
      </Form>
    </Container>
  );
}