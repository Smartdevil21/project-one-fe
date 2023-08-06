import {
  ICreateCustomer,
  ICustomer,
} from "@/typings/interfaces/customer/customer.interface";
import { ICreateItem, IItem } from "@/typings/interfaces/items/items.interface";
import {
  ICreateOrder,
  IOrder,
} from "@/typings/interfaces/order/order.interface";
import { ITransaction } from "@/typings/interfaces/transaction/transaction.interface";

export interface ListeningEvents {
  "customer:created": (customers: ICustomer[]) => void;
  "item:created": (items: IItem[]) => void;
  "order:created": (order: IOrder[]) => void;
}

export interface EmitEvents {
  "customer:create": ({ customer_name }: ICreateCustomer) => void;
  "item:create": (item: ICreateItem) => void;
  "item:list": (callback: ({ items }: { items: IItem[] }) => void) => void;
  "order:create": (order: ICreateOrder) => void;
  "order:list-pending": (
    callback: ({ data }: { data: IOrder[] }) => void
  ) => void;
  "order:list": (callback: ({ data }: { data: IOrder[] }) => void) => void;
  "transaction:list": (
    callback: ({ transactions }: { transactions: ITransaction[] }) => void
  ) => void;
}
