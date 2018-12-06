import { INCREMENT, DECREMENT, ADD, SUBTRACT, RESET } from "../actions/actionTypes";

import { updateObject } from "../utility";

const initialState = {
  counter: 0
};

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return updateObject(state, {
        counter: state.counter + 1
      });

    case DECREMENT:
      return updateObject(state, {
        counter: state.counter - 1
      });
    case ADD:
      return updateObject(state, {
        counter: state.counter + action.value
      });

    case SUBTRACT:
      return updateObject(state, {
        counter: state.counter - action.value
      });
    case RESET:
      return updateObject(state, {
        ...initialState
      });
    default:
      return state;
  }
};
