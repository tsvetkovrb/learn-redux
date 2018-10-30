import {
  ACTION_CHANGE_FIRST_NAME,
  ACTION_CHANGE_SECOND_NAME,
  ACTION_CHANGE_THIRD_NAME,
  ACTION_CHANGE_AGE,
  ACTION_SHOW_TEXT
} from "./actionTypes";

//создаём константы действий

// создаем сами действия

// они должны не напрямую передавать в dispatch, а через прослойку: "Action creators"
// const actionChangeFirstName = {  ....
//   type: ACTION_CHANGE_FIRST_NAME, .... после создания " changeFirstName " мы можем убрать actionChangeFirstName
//   payload: null  ....
// };

// const actionChangeSecondName = {
//   type: ACTION_CHANGE_SECOND_NAME,
//   payload: null
// };

export const rootReducer = (state, action) => {
  // принимает в себя исходный state и действие, которое у нас произошло
  switch (action.type) {
    case ACTION_CHANGE_FIRST_NAME:
      return { ...state, firstName: action.newFirstName };
    case ACTION_CHANGE_SECOND_NAME:
      return { ...state, secondName: action.newSecondName };
    case ACTION_CHANGE_THIRD_NAME:
      return { ...state, thirdName: action.newThirdName };
    case ACTION_CHANGE_AGE:
      return { ...state, age: action.newAge };
    case ACTION_SHOW_TEXT:
      return { ...state, showText: action.text };

    default:
      return state;
  }
};
