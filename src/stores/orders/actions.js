import jsonServer from "../../constants/axiosInstances/jsonServer";
import * as actionTypes from "./actionTypes";

export const setOrdersSuccess = (orders) => {
  return {
    type: actionTypes.SET_ORDERS_SUCCESS,
    payload: { orders: orders }
  };
};

export const setOrdersFailed = (error) => {
  return {
    type: actionTypes.SET_ORDERS_FAILED,
    payload: { error: error }
  };
};

export const fetchOrders = (onSuccess, onError) => {
  return (dispatch) => {
    jsonServer
      .get("/orders")
      .then((response) => {
        const orders =
          response.data &&
          Object.keys(response.data).map((key) => {
            return {
              ...response.data[key],
              id: key,
              price: +response.data[key].price
            };
          });

        dispatch(setOrdersSuccess(orders || []));

        if (typeof onSuccess === "function" && onSuccess) onSuccess();
      })
      .catch((error) => {
        dispatch(setOrdersFailed(error));

        if (typeof onError === "function" && onError) onError();
      });
  };
};
