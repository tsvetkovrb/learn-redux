import { INCREMENT, DECREMENT, ADD, RESET, SUBTRACT } from "./actionTypes";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const fetchDecrement = value => dispatch => {
  return setTimeout(() => {
    dispatch(add(value));
  }, 2000);
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const add = value => {
  return {
    type: ADD,
    value
  };
};

export const subtract = value => {
  return {
    type: SUBTRACT,
    value
  };
};

export const reset = () => {
  return {
    type: RESET
  };
};
