import { IItem } from "../items/items.interface";
import { IOrder } from "../order/order.interface";
import { ITransaction } from "../transaction/transaction.interface";

interface IStore {
  counter: number;
  orders: IOrder[];
  transactions: ITransaction[];
  items: IItem[];
}
export type { IStore };
