// import "@babel/polyfill";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { store, history } from "./store";
import { routes } from "./routes";
import { ConnectedRouter } from "connected-react-router";
// import "./assets/styles/style.js";
import { TestType, StringType } from "my-types";
let example: TestType["test"] = "test";
let another_example: StringType = "another test";

// render the main component
ReactDOM.render(
  <ConnectedRouter history={history}>{routes}</ConnectedRouter>,

  document.getElementById("root")
);
