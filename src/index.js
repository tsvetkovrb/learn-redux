import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import App from "./App";

import { reducer } from "./redux/reducers/index.js";

import "./index.css";

const logger = store => {
  console.log("Logger принимает стору", store);
  return next => {
    console.log("После сторы идёт [next]", next);
    return action => {
      console.log("Предыдущее состояние", store.getState());

      if (action.type === "ADD") {
        console.log("ADDDDDDDDD");
      }
      console.log("Потом диспчится экшен [Middleware] Dispatching", action);
      const result = next(action);
      console.log("И вызывается [next(action)]", result);
      console.log("[Middleware] Изменённое состояние", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
