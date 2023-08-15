import { ICustomer } from "../customer/customer.interface";
import { IItem } from "../items/items.interface";
import { IOrder } from "../order/order.interface";
import { ITransaction } from "../transaction/transaction.interface";
import { IUser } from "../user/user.interface";

interface IStore {
  counter: number;
  customers: ICustomer[];
  orders: IOrder[];
  transactions: ITransaction[];
  items: IItem[];
  user: Omit<IUser, "password">;
}
export type { IStore };
