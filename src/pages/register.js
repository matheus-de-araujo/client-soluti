import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

import api from '../api';
import './css/button.css';

export default function Register () {

  const [data, setData] = useState({
    name: "",
    email: "",
    cpf: "",
    country: "",
    state: "",
    city: "",
    district: "",
    cep: "",
    street: "",
    complement: "",
    password: "",
  })

  function handleSubmit(e){
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  function submit(e){
    e.preventDefault();
    api.post('user-store', data)
      .then(function(response) {
        alert(response.data + ' | Status: ' + response.status);
      })
      .catch(function(error) {
        if(!typeof response === "undefined") {
          alert('Erro: ' + error.response.data.errorInfo[2] + ' | Status: ' + error.response.request.status);
        }
        else {
          alert(error);
        }
      }
    );
  }

  return(
    <Container> 
      <Form onSubmit={(e) => submit(e)}>  
        <FormGroup>
          <Label for="name">Nome</Label>
          <Input type="name" onChange={(e) => handleSubmit(e)} id="name" value={data.name} placeholder="Digite seu Nome" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" onChange={(e) => handleSubmit(e)} id="email" value={data.email} placeholder="Digite seu Email" />
        </FormGroup>
        <FormGroup>
          <Label for="cpf">Cpf</Label>
          <Input type="cpf" onChange={(e) => handleSubmit(e)} id="cpf" value={data.cpf} placeholder="Digite seu Cpf" />
        </FormGroup>
        <FormGroup>
          <Label for="birthday">Data de Nascimento</Label>
          <Input type="date" onChange={(e) => handleSubmit(e)} id="birthday" value={data.birthday}  />
        </FormGroup>
        <FormGroup>
          <Label for="telephone">Telefone</Label>
          <Input type="telephone" onChange={(e) => handleSubmit(e)} id="telephone" value={data.telephone} placeholder="Digite seu telefone" />
        </FormGroup>
         <FormGroup>
          <Label for="country">País</Label>
          <Input type="country" onChange={(e) => handleSubmit(e)} id="country" value={data.country} placeholder="Qual o seu País" />
        </FormGroup>
        <FormGroup>
          <Label for="state">Estado</Label>
          <Input type="state" onChange={(e) => handleSubmit(e)} id="state" value={data.state} placeholder="Qual o seu Estado" />
        </FormGroup>
        <FormGroup>
          <Label for="city">Cidade</Label>
          <Input type="city" onChange={(e) => handleSubmit(e)} id="city" value={data.city} placeholder="Qual a sua Cidade" />
        </FormGroup>
        <FormGroup>
          <Label for="district">Bairro/Setor</Label>
          <Input type="district" onChange={(e) => handleSubmit(e)} id="district" value={data.district} placeholder="Digite o nome do Bairro ou Setor" />
        </FormGroup>
        <FormGroup>
          <Label for="cep">Cep</Label>
          <Input type="cep" onChange={(e) => handleSubmit(e)} id="cep" value={data.cep} placeholder="Digite o Cep" />
        </FormGroup>
        <FormGroup>
          <Label for="street">Rua</Label>
          <Input type="street" onChange={(e) => handleSubmit(e)} id="street" value={data.street} placeholder="Digite o nome da Rua" />
        </FormGroup>
        <FormGroup>
          <Label for="complement">Complemento</Label>
          <Input type="complement" onChange={(e) => handleSubmit(e)} id="complement" value={data.complement} placeholder="Digite o complemento do endereço" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Senha</Label>
          <Input type="password" onChange={(e) => handleSubmit(e)} id="password" value={data.password} placeholder="Digite sua Senha" />
        </FormGroup>

        <Button id="button-form">Cadastrar</Button>
        <a id="a-form" href="/" >Voltar</a>
      </Form>
    </Container>
  );
}