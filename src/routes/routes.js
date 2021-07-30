import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Products } from "../pages/Products";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { Details } from "../pages/Details";
import { useSession } from "../hooks/useSession";

export function Routes() {
  const { isItLogged } = useSession();
  const isLogged = isItLogged();
  return (
    <Router>
      <Redirect from="*" to="/" />
      {isLogged && <Redirect to="/" />}
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/detalhes">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}
