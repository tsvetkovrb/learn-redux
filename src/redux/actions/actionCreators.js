import {
  INCREMENT,
  DECREMENT,
  ADD,
  SUBTRACT,
  RESET,
  STORE_RESULT,
  DELETE_RESULT
} from "./actions";
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

export const storeResult = result => {
  return {
    type: STORE_RESULT,
    result
  };
};

export const deleteResult = id => {
  return {
    type: DELETE_RESULT,
    id
  };
};
