import jsonServer from "../../constants/axiosInstances/jsonServer";
import * as actionTypes from "./actionTypes";

export const addIngredient = (ingredient) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    payload: { ingredient: ingredient }
  };
};

export const removeIngredient = (ingredient) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    payload: { ingredient: ingredient }
  };
};

export const resetBurgerIngredients = () => {
  return {
    type: actionTypes.RESET_BURGER_INGREDIENTS
  };
};

export const setIngredientListSuccess = (ingredient) => {
  return {
    type: actionTypes.SET_INGREDIENT_LIST_SUCCESS,
    payload: { ingredient: ingredient }
  };
};

export const setIngredientListFailed = (error) => {
  return {
    type: actionTypes.SET_INGREDIENT_LIST_FAILED,
    payload: { error: error }
  };
};

export const fetchIngredientList = (onSuccess, onError) => {
  return (dispatch) => {
    jsonServer
      .get("/ingredient_list")
      .then((response) => {
        dispatch(setIngredientListSuccess(response.data));

        if (typeof onSuccess === "function" && onSuccess) onSuccess();
      })
      .catch((error) => {
        dispatch(setIngredientListFailed(error));

        if (typeof onError === "function" && onError) onError();
      });
  };
};
