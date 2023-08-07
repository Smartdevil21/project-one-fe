import { combineReducers } from "@reduxjs/toolkit";
import { counterReducer } from "@/store/reducers/counter.reducer";
import { orderReducer } from "./reducers/order.reducer";
import { transactionReducer } from "./reducers/transaction.reducer";
import { itemReducer } from "./reducers/item.reducer";
import { customerReducer } from "./reducers/customer.reducer";

const combinedReducers = combineReducers({
  counter: counterReducer,
  customers: customerReducer,
  orders: orderReducer,
  transactions: transactionReducer,
  items: itemReducer,
});

export { combinedReducers };
