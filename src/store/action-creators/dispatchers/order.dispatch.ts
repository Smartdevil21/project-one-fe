import { IOrder } from "@/typings/interfaces/order/order.interface";
import { OrderAction } from "../actions/orders.action";
import { Dispatch, AnyAction } from "redux";

const setOrderDispatch = (payload: IOrder[]) => {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch({
      type: OrderAction.SET,
      payload,
    });
  };
};

export { setOrderDispatch };
