import { STORE_RESULT, DELETE_RESULT } from "../actions/actionTypes";

const initialState = {
  results: []
};

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(result => result.id !== action.id);
  return {
    ...state,
    results: updatedArray
  };
};

export const result = (state = initialState, action) => {
  switch (action.type) {
    case STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ value: action.result, id: new Date() })
      };
    case DELETE_RESULT:
      return deleteResult(state, action);
    default:
      return state;
  }
};
