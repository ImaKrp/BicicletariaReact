import { useState, createContext, useEffect, useCallback } from "react";
import { api } from "../../api/api";
import { changeLocalData, getLocalData } from "../../LocalStorage/LocalStorage";
const initialState = [];
export const sessionContext = createContext(initialState);

export function SessionProvider({ children }) {
  const [session, setSession] = useState(getLocalData('user')??{});
  const [isLogged, setIsLogged] = useState(false);
  const [token,setToken] = useState(getLocalData('token')??{});
  function onGoingSession() {
    return session;
  }

  useEffect(() => {
    if (token && session)LogIn() 
    else LogOut()
  }, [session, token]);



  function isItLogged() {
    return isLogged;
  }

  function LogIn() {
    setIsLogged(true);
  }

  function LogOut() {
    setIsLogged(false);
    changeLocalData({formName: 'user', object: {}})
    changeLocalData({formName: 'token', object: {}})
  }
  function getToken(){
    return token;
  }

  async function CreateSession(Email, Pass) {
    try{
    const {data}= await api.post('/authenticate', {
          email: `${Email}`,
          password:`${Pass}`
      });

        setSession(data.user[0]);
        setToken(data.token);
        changeLocalData({formName: 'user', object: data.user[0]})
        changeLocalData({formName: 'token', object: data.token})
        console.log(data.user)
        console.log(data.token)
        console.log(data)
        LogIn();
        return true;
      }  
      catch{
        return false
      }
  }

  async function AddAccount(Email, Pass, Name, Cpf, Telefone,Nascimento) {
    try{
    await api.post("/register", {
      email: `${Email}`,
      password: `${Pass}`,
      username: `${Name}`,
      cpf: `${Cpf}`,
      telephone: `${Telefone}`,
      birth: `${Nascimento}`      
    });
    return true;
  }
catch{
  return false
}
    
  }

  return (
    <sessionContext.Provider
      value={{
        onGoingSession,
        isItLogged,
        CreateSession,
        LogIn,
        AddAccount,
        LogOut,
        getToken
      }}
    >
      {children}
    </sessionContext.Provider>
  );
}
