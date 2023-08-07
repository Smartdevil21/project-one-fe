import { IItem } from "@/typings/interfaces/items/items.interface";
import { IOrder } from "@/typings/interfaces/order/order.interface";

export function getTotalCheckoutAmount(
  orders: IOrder[],
  items: IItem[]
): number {
  let amount = 0;
  orders.forEach((order) => {
    const item = items.find((ele) => ele.item_id === order.item_id);
    if (!item) return;
    amount += order.quantity * item.price;
  });
  return amount;
}
