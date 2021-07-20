import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Products } from "../pages/Products";
import { Login } from "../pages/Login";

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
      </Switch>
    </Router>
  );
}
