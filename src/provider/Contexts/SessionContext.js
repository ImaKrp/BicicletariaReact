import { useState, useCallback, createContext } from "react";
import { api } from "../../api/api";
const initialState = [];
export const sessionContext = createContext(initialState);

export function SessionProvider({ children }) {
  const [Accounts, setAccounts] = useState([]);
  const [session, setSession] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [genId, setGenId] = useState(0);

  const fetchAccounts = useCallback(async () => {
    const { data } = await api.get("/Accounts");
    await setAccounts(data);
    setGenId(Accounts.length + 1);
  }, [Accounts.length]);

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

  async function CreateSession(Name, Pass) {
    await fetchAccounts();

    for (const account of Accounts) {
      if (Name === account.name && Pass === account.pass) {
        setSession(account);
        console.log(isLogged);
        LogIn();
        return true;
      }
    }
  }

  async function AddAccount(Name, Pass) {
    await fetchAccounts();

    let erro = 0;

    for (const account of Accounts) {
      if (Name === account.name) erro++;
      if (Name == null || Pass == null || Name === "" || Pass === "") erro++;
    }

    if (erro > 0) return false;
    await api.post("/Accounts", {
      id: genId,
      name: `${Name}`,
      pass: `${Pass}`,
    });
    LogIn();
    LogOut();
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
