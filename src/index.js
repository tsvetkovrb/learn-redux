import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./App";

import { reducer } from "./redux/reducers/index.js";

import "./index.css";

const logger = store => {
  return nextArgument => {
    return action => {
      console.log("[Middleware] Dispatching", action);
      const result = nextArgument(action);
      console.log("[Middleware] next state", store.getState());
      return result;
    };
  };
};

const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
