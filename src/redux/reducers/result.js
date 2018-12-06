import { STORE_RESULT, DELETE_RESULT } from "../actions/actionTypes";

const initialState = {
  results: []
};

export const result = (state = initialState, action) => {
  switch (action.type) {
    case STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ value: action.result, id: new Date() })
      };
    case DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);
      const updatedArray = state.results.filter(
        result => result.id !== action.id
      );
      return {
        ...state,
        results: updatedArray
      };
    default:
      return state;
  }
};
