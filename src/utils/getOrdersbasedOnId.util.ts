import { IOrder } from "@/typings/interfaces/order/order.interface";

interface IParams {
  id: string;
  orders: IOrder[];
}

export function getOrdersBasedOnID({ id, orders }: IParams): IOrder[] {
  return orders.filter((order) => order.customer_id === id);
}
