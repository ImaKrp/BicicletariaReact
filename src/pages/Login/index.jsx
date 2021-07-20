import React from "react";
import { Body, Icon, Log, Form, Input, Arrow } from "./style";
import { useSession } from "../../hooks/useSession";
import { useState } from "react";

export const Login = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const { Logging } = useSession();

  const handleSubmit = (e, Username, Password) => {
    e.preventDefault();
    Logging(Username, Password);
  };

  return (
    <Body>
      <Arrow href="/">
        <i className="fas fa-caret-left"></i>
      </Arrow>
      <Icon src="/logo512.png" />
      <Form onSubmit={(e) => handleSubmit(e, Username, Password)}>
        <Input
          type="text"
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Usuário"
        />
        <Input
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          type="password"
        />
        <Log type="submit">Entrar</Log>
      </Form>
    </Body>
  );
};
