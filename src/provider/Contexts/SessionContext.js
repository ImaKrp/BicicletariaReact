import { useState, useEffect, useCallback, createContext } from "react";
import { api } from "../../api/api";
const initialState = [];
export const sessionContext = createContext(initialState);

export function SessionProvider({ children }) {
  const [Accounts, setAccounts] = useState([]);
  const [session, setSession] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [genId, setGenId] = useState(0);

  const fetchAccounts = useCallback(async () => {
    const { data } = await api.get("/accounts");
    setAccounts(data);
    setGenId(Accounts.length + 1);
  }, [Accounts.length]);

  useEffect(() => {
    fetchAccounts();
  }, [fetchAccounts]);

  function onGoingSession() {
    return session;
  }

  function isItLogged() {
    return isLogged;
  }

  function LogIn() {
    setIsLogged(true);
  }

  function LogOut() {
    setIsLogged(false);
    setSession([]);
  }

  async function CreateSession(Email, Pass) {
    await fetchAccounts();
    for (const account of Accounts) {
      if (Email === account.email && Pass === account.pass) {
        setSession(account);
        console.log(isLogged);
        LogIn();
        return true;
      }
    }
  }

  async function AddAccount(Email, Pass, Name) {
    let erro = 0;

    for (const account of Accounts) {
      if (Email === account.email) erro++;
    }

    if (erro > 0) return false;

    await api.post("/accounts", {
      id: genId,
      email: `${Email}`,
      pass: `${Pass}`,
      name: `${Name}`,
    });

    setSession({ genId, Email, Pass });
    LogIn();

    return true;
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
        fetchAccounts,
      }}
    >
      {children}
    </sessionContext.Provider>
  );
}
