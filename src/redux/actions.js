import {
  ACTION_CHANGE_FIRST_NAME,
  ACTION_CHANGE_SECOND_NAME,
  ACTION_CHANGE_THIRD_NAME,
  ACTION_CHANGE_AGE,
  ACTION_SHOW_TEXT
} from "./actionTypes";

/**
 * changeFirstName & changeSecondName являеются actionCreators
 */

export const changeFirstName = newFirstName => {
  // должен возвращать объект, который мы будем dispatch'ить

  return {
    type: ACTION_CHANGE_FIRST_NAME,
    newFirstName
  };
};

export const changeSecondName = newSecondName => {
  // должен возвращать объект, который мы будем dispatch'ить
  return {
    type: ACTION_CHANGE_SECOND_NAME,
    newSecondName
  };
};

export const changeThirdName = newThirdName => {
  return {
    type: ACTION_CHANGE_THIRD_NAME,
    newThirdName
  };
};

export const changeAge = newAge => {
  return {
    type: ACTION_CHANGE_AGE,
    newAge
  };
};

export const showTextField = text => {
  return {
    type: ACTION_SHOW_TEXT,
    text
  };
};

/**
 * changeFirstName & changeSecondName являеются actionCreators
 */
