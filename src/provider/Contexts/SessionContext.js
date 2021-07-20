import { useState, createContext } from "react";
import { api } from "../../api/api";
const initialState = [];
export const sessionContext = createContext(initialState);

export function SessionProvider({ children }) {
  const [Accounts, setAccounts] = useState([]);
  const [session, setSession] = useState([]);
  const [isLogged, setIsLogged] = useState(false);

  const fetchAccounts = async () => {
    const { data } = await api.get("/Accounts");
    setAccounts(data);
  };

  function onGoingSession() {
    return session;
  }

  function isItLogged() {
    return isLogged;
  }

  function CreateSession(Name, Pass) {
    fetchAccounts();
    console.log(Accounts)
    for (const account of Accounts) {
      if (Name === account.name && Pass === account.pass) {
        setSession(account);
        LogInOut();
        console.log(account);
        return true;
      }
    }
  }

  function LogInOut() {
    setIsLogged(!isLogged);
    setSession([]);
  }

  function AddAccount(Name, Pass) {
    for (const account of Accounts) {
      if (Name === account.name && Pass === account.pass) return false;
      if (Name == null  || Pass == null) return false;
    }

    api.post("/Accounts", {
      id: (Accounts.length += 1),
      name: `${Name}`,
      pass: `${Pass}`,
    });

    return true;
  }

  return (
    <sessionContext.Provider
      value={{
        onGoingSession,
        isItLogged,
        CreateSession,
        LogInOut,
        AddAccount,
      }}
    >
      {children}
    </sessionContext.Provider>
  );
}
