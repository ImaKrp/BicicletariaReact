import { useState, createContext } from "react";
import Accounts from "../../utils/json/accounts.json";

const initialState = [];
export const sessionContext = createContext(initialState);

export function SessionProvider({ children }) {
  const [session, setSession] = useState([]);
  const [isLogged, setIsLogged] = useState(false);

  function onGoingSession() {
    return session;
  }

  function Session() {
    return isLogged;
  }

  function Logging(Name, Pass) {
    for (const account of Accounts) {
      if (Name === account.name && Pass === account.pass) {
        setSession(account);
        LogInOut();
        console.log(account);
      }
    }
  }

  function LogInOut() {
    setIsLogged(!isLogged);
    console.log("logged");
  }

  return (
    <sessionContext.Provider value={{ onGoingSession, Logging, LogInOut, Session }}>
      {children}
    </sessionContext.Provider>
  );
}
