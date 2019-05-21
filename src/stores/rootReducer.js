import { combineReducers } from "redux";
import burgerBuilderReducer from "./burgerBuilder/reducer";
import ordersReducer from "./orders/reducer";

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  orders: ordersReducer
});

export default rootReducer;
