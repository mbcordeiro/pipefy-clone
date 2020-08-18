import React from "react";

import { Container, Label } from "./styles";

function Card() {
  return (
    <Container>
      <header>
        <Label color="#7159c1"></Label>
      </header>
      <p>Realizar tarefa</p>
      <img src="https://avatars3.githubusercontent.com/u/55818513?s=460&u=20b00b19981de2d48883d8ad159db9db2ad06f4a&v=4" alt="Avatar" />
    </Container>
  );
}

export default Card;
