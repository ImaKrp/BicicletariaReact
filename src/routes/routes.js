import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { Products } from "../pages/Products";
import { Login } from "../pages/Login";
import { useSession } from "../hooks/useSession";

export function Routes() {
  const { Session } = useSession();
  const isLogged = Session()
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        {isLogged ? 
        (<Redirect to="/" />)
        :
        null
      }
      </Switch>
    </Router>
  );
}
