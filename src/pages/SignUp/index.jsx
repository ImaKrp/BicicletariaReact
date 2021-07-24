import React, { useState } from "react";
import { Body, Icon, Log, Form, Input, Arrow, InputDiv, Eye } from "./style";
import { useSession } from "../../hooks/useSession";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SignUp = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [visibility, setVisibility] = useState(true);
  const { AddAccount, isItLogged } = useSession();

  const ToastAdded = () =>
    toast.dark("Conta Cadastrada com Sucesso, Logue na Conta", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  const ToastErro = () =>
    toast.dark("Usuário já Cadastrado / Dados Inválidos", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  const handleSubmit = async (e, Username, Password) => {
    e.preventDefault();
    if (Username === "" || Password === "") {
      ToastErro();
      return;
    }
    const isRegistered = await AddAccount(Username, Password);
    if (isRegistered) ToastAdded();
    if (!isRegistered) ToastErro();
  };

  const isLogged = isItLogged();

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        style={{ fontFamily: "Poppins, sans-serif", fontSize: 14 }}
      />
      <Body>
        <Arrow to="/">
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
          <InputDiv>
            <Input
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
              type={visibility ? "password" : 'text' }
            />
            <Eye onClick={() => setVisibility(!visibility)}>
              {visibility ? (
                <i className="far fa-eye-slash"></i>
              ) : (
                <i className="far fa-eye"></i>
              )}
            </Eye>
          </InputDiv>
          <Log type="submit">Cadastrar</Log>
        </Form>
        {isLogged ? <Redirect to="/login" /> : null}
      </Body>
    </>
  );
};
