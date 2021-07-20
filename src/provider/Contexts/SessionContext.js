import { useState, createContext, useEffect } from "react";
import { api } from "../../api/api";
const initialState = [];
export const sessionContext = createContext(initialState);

export function SessionProvider({ children }) {
  const [Accounts, setAccounts] = useState([]);

  const fetchAccounts = async () => {
    const {data} = await api.get('/Accounts');
    setAccounts(data);
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

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
        LogIn();
        console.log(account);
      }
    }
  }

  function LogIn() {
    setIsLogged(true);
    console.log("logged");
  }

  return (
    <sessionContext.Provider value={{ onGoingSession, Logging, Session }}>
      {children}
    </sessionContext.Provider>
  );
}
