// This function returns an array of order which are not completed.

import { IOrder } from "@/typings/interfaces/order/order.interface";
import { ITransaction } from "@/typings/interfaces/transaction/transaction.interface";

interface IParams {
  orders: IOrder[];
  transactions: ITransaction[];
}

export function getIncompleteOrders({
  orders,
  transactions,
}: IParams): IOrder[] {
  let result: IOrder[] = [];
  orders.map((order) => {
    const res = transactions.filter(
      (transaction) => transaction.customer_id === order.customer_id
    );
    if (res.length === 0) {
      result.push(order);
    }
  });
  return result;
}
