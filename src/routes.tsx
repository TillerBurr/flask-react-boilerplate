import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { App } from "./components/App";
import Home from "./components/Home";

const Routes: React.FC = () => {
  return (
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </App>)
};

export { Routes };
