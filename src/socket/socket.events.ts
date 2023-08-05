import {
  ICreateCustomer,
  ICustomer,
} from "@/typings/interfaces/customer/customer.interface";

export interface ListeningEvents {
  "customer:created": (customers: ICustomer[]) => void;
}

export interface EmitEvents {
  "customer:create": ({ customer_name }: ICreateCustomer) => void;
}
