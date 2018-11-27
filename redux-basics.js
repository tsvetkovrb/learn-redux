//Store
//Reducer
//Dispatching Action
//Subscribtion Acition

const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0
};
//reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1
    };
  }
  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  return state;
};
//store
const store = createStore(rootReducer);
console.log(store.getState());

//subscribtion action
store.subscribe(() => {
  console.log("[Subscribtion]", store.getState());
});

//dispatching action
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState());
