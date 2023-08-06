// This function returns an array of orders with each entry specific to one customer only

import { IOrder } from "@/typings/interfaces/order/order.interface";

export function createOrderSet(orders: IOrder[]): IOrder[] {
  let result: IOrder[] = [];
  orders.map((order) => {
    const entries = result.filter(
      (ele) => ele.customer_id === order.customer_id
    );
    if (entries.length === 0) {
      result.push(order);
    }
  });

  return result;
}
