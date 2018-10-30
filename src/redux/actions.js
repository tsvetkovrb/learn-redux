import {
  ACTION_CHANGE_FIRST_NAME,
  ACTION_CHANGE_SECOND_NAME,
  ACTION_CHANGE_THIRD_NAME
} from "../index";
/**
 * changeFirstName & changeSecondName являеются actionCreators
 */

export const changeFirstName = newFirstName => {
  // должен возвращать объект, который мы будем dispatch'ить

  return {
    type: ACTION_CHANGE_FIRST_NAME,
    payload: newFirstName
  };
};

export const changeSecondName = newSecondName => {
  // должен возвращать объект, который мы будем dispatch'ить
  return {
    type: ACTION_CHANGE_SECOND_NAME,
    payload: newSecondName
  };
};

export const changeThirdName = newThirdName => {
  return {
    type: ACTION_CHANGE_THIRD_NAME,
    payload: newThirdName
  };
};

/**
 * changeFirstName & changeSecondName являеются actionCreators
 */
