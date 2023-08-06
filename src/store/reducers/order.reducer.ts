import { IAction } from "@/typings/interfaces/store/action.interfaace";
import { OrderAction } from "../action-creators/actions/orders.action";
import { IOrder } from "@/typings/interfaces/order/order.interface";

const orderReducer = (orders: IOrder[] = [], action: IAction) => {
  switch (action.type) {
    case OrderAction.SET:
      return action.payload;

    default:
      return orders;
  }
};

export { orderReducer };
