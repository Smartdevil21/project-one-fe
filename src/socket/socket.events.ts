import {
  ICreateCustomer,
  ICustomer,
} from "@/typings/interfaces/customer/customer.interface";
import { ICreateItem, IItem } from "@/typings/interfaces/items/items.interface";
import {
  ICreateOrder,
  IOrder,
  IUpdateOrder,
} from "@/typings/interfaces/order/order.interface";
import {
  ICreateTransaction,
  ITransaction,
} from "@/typings/interfaces/transaction/transaction.interface";

export interface ListeningEvents {
  "customer:created": (customers: ICustomer[]) => void;
  "item:created": (items: IItem[]) => void;
  "order:created": (order: IOrder[]) => void;
  "order:updated": (order: IOrder[]) => void;
  "order:deleted": (order: IOrder[]) => void;
  "transaction:created": (transactions: ITransaction[]) => void;
}

export interface EmitEvents {
  "customer:create": (
    { customer_name, customer_id }: ICustomer,
    callback: (result: boolean) => void
  ) => void;
  "customer:list": (
    callback: ({ customers }: { customers: ICustomer[] }) => void
  ) => void;
  "item:create": (item: ICreateItem) => void;
  "item:list": (callback: ({ items }: { items: IItem[] }) => void) => void;
  "order:create": (order: ICreateOrder) => void;
  "order:list-pending": (
    callback: ({ data }: { data: IOrder[] }) => void
  ) => void;
  "order:list": (callback: ({ data }: { data: IOrder[] }) => void) => void;
  "order:update": (updatedOrder: IUpdateOrder) => void;
  "order:delete": (row_id: number) => void;
  "transaction:list": (
    callback: ({ transactions }: { transactions: ITransaction[] }) => void
  ) => void;
  "transaction:create": (transaction: ICreateTransaction) => void;
}
