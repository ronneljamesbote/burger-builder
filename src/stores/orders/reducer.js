import * as actionTypes from "./actionTypes";

const initialState = {
  orders: [],
  ordersError: null
};

const ordersReducer = (state = initialState, action) => {
  const payload = action.payload;

  switch (action.type) {
    case actionTypes.SET_ORDERS_SUCCESS:
      return {
        ...state,
        orders: payload.orders,
        ordersError: null
      };
    case actionTypes.SET_ORDERS_FAILED:
      return {
        ...state,
        orders: [],
        ordersError: payload.error
      };
    default:
      return state;
  }
};

export default ordersReducer;
