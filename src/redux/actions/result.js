import { STORE_RESULT, DELETE_RESULT } from "./actionTypes";

export const storeResult = result => {
  return (dispatch /*getState*/) => {
    setTimeout(() => {
      // const oldCounter = getState().counter.counter;
      // console.log(oldCounter);
      dispatch(saveResult(result));
    }, 2000);
  };
};

export const saveResult = result => {
  const newResult = result * 2;
  return {
    type: STORE_RESULT,
    result: newResult
  };
};

export const deleteResult = id => {
  return {
    type: DELETE_RESULT,
    id
  };
};
