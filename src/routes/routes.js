import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Products } from "../pages/Products";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";

export function Routes() {
  return (
    <Router>
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
      </Switch>
    </Router>
  );
}
