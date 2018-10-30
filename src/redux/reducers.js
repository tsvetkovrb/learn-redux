import {
  ACTION_CHANGE_FIRST_NAME,
  ACTION_CHANGE_SECOND_NAME,
  ACTION_CHANGE_THIRD_NAME
} from "../index";

const initialState = {
  firstName: "Роман",
  secondName: "Цветков",
  thirdName: "Борисович"
};

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

export const rootReducer = (state = initialState, action) => {
  // принимает в себя исходный state и действие, которое у нас произошло
  switch (action.type) {
    case ACTION_CHANGE_FIRST_NAME:
      return { ...state, firstName: action.payload };
    case ACTION_CHANGE_SECOND_NAME:
      return { ...state, secondName: action.payload };
    case ACTION_CHANGE_THIRD_NAME:
      return { ...state, thirdName: action.payload };

    default:
      return state;
  }
};
