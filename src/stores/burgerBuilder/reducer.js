import { findIndex } from "../../utilities";
import * as actionTypes from "./actionTypes";

const initialState = {
  ingredientList: {},
  ingredients: [],
  totalPrice: 0,
  ingredientListError: null
};

const addIngredient = (state, ingredient) => {
  const index = findIndex(ingredient.type, state.ingredients);
  const newIngredients = [...state.ingredients];

  if (index !== -1)
    newIngredients[index] = {
      ...state.ingredients[index],
      quantity: state.ingredients[index].quantity + 1
    };
  else newIngredients.push({ ...ingredient, quantity: 1 });

  return {
    ...state,
    ingredients: newIngredients,
    totalPrice: state.totalPrice + ingredient.price
  };
};

const removeIngredient = (state, ingredient) => {
  const index = findIndex(ingredient.type, state.ingredients);
  const newIngredients = [...state.ingredients];

  if (index !== -1) {
    newIngredients[index] = {
      ...state.ingredients[index],
      quantity: state.ingredients[index].quantity - 1
    };
  }

  return {
    ...state,
    ingredients: newIngredients.filter((ingredient) => {
      return ingredient.quantity >= 1;
    }),
    totalPrice:
      newIngredients[index].quantity >= 0
        ? state.totalPrice - ingredient.price
        : state.totalPrice
  };
};

const reducer = (state = initialState, action) => {
  const payload = action.payload;

  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, payload.ingredient);
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, payload.ingredient);
    case actionTypes.RESET_BURGER_INGREDIENTS:
      return {
        ...state,
        ingredients: [],
        totalPrice: 0
      };
    case actionTypes.SET_INGREDIENT_LIST_SUCCESS:
      return {
        ...state,
        ingredientList: payload.ingredient,
        ingredientListError: null
      };
    case actionTypes.SET_INGREDIENT_LIST_FAILED:
      return {
        ...state,
        ingredientList: {},
        ingredientListError: payload.error
      };
    default:
      return state;
  }
};

export default reducer;
