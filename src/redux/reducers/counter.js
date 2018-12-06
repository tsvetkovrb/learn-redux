import {
  INCREMENT,
  DECREMENT,
  ADD,
  SUBTRACT,
  RESET
} from "../actions/actionTypes";

const initialState = {
  counter: 0
};

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case ADD:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value
      };
    case RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};
