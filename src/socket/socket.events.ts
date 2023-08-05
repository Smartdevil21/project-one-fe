import {
  ICreateCustomer,
  ICustomer,
} from "@/typings/interfaces/customer/customer.interface";
import { ICreateItem, IItem } from "@/typings/interfaces/items/items.interface";
import {
  ICreateOrder,
  IOrder,
} from "@/typings/interfaces/order/order.interface";

export interface ListeningEvents {
  "customer:created": (customers: ICustomer[]) => void;
  "item:created": (items: IItem[]) => void;
  "order:created": (order: IOrder[]) => void;
}

export interface EmitEvents {
  "customer:create": ({ customer_name }: ICreateCustomer) => void;
  "item:create": (item: ICreateItem) => void;
  "order:create": (order: ICreateOrder) => void;
}
