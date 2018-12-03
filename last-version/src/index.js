import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";

import { rootReducer } from "./redux/reducers";

import MainComponentContainer from "./containers/MainComponentContainer";

import "./index.css";

const initialState = {
  firstName: "Роман",
  secondName: "Цветков",
  thirdName: "Борисович",
  age: "21",
  showText: false
};

const store = createStore(rootReducer, initialState); // принимает в себя reduser и изначальные данные;
console.log("index");

ReactDOM.render(
  <Provider store={store}>
    <MainComponentContainer />
  </Provider>,
  document.getElementById("root")
);
