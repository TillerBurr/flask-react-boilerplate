// import "@babel/polyfill";
import * as React from "react";
import * as ReactDOM from "react-dom";
import Main from './main'
import { createBrowserHistory } from 'history'

import configureStore from './configureStore'
import * as serviceWorker from './serviceWorker'

const history = createBrowserHistory()
const initialState = window.INITIAL_REDUX_STATE
const store = configureStore(history, initialState)
// render the main component
ReactDOM.render(

  <Main store={store} history={history} />,

  document.getElementById("root")
);

// TODO is serviceWorker necessary?
serviceWorker.unregister()
