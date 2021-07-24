import React, { useEffect, useState } from "react";
import { Body, Icon, Log, Form, Input, Arrow, InputDiv, Eye } from "./style";
import { useSession } from "../../hooks/useSession";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "react-router-dom";

export const Login = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [visibility, setVisibility] = useState(true);
  const { isItLogged, CreateSession, fetchAccounts } = useSession();

  useEffect(() => {
    fetchAccounts();
  }, [fetchAccounts]);

  const ToastErro = () =>
    toast.dark("Conta Não Encontrada", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  const handleSubmit = async(e, Username, Password) => {
    e.preventDefault();
    if (await CreateSession(Username, Password) !== true) ToastErro()
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
          <Log type="submit">Entrar</Log>
        </Form>
        {isLogged && <Redirect to="/" />}
      </Body>
    </>
  );
};
