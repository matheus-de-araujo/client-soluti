import React from 'react';
import { Container } from 'reactstrap';

import './css/home.css'

export default function Home () {
  return (
    <Container> 
      <h1 id="h1" > Prova Técnica - Soluti </h1>
      <div id="home" > 
        <a id="a-home" href="/login"> Login </a>
        <a id="a-home" href="/register" > Cadastro </a>
      </div>
    </Container>
  );
}