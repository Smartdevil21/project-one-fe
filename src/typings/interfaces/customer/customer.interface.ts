export interface ICustomer {
  customer_id: string;
  customer_name: string;
}

export type ICreateCustomer = Omit<ICustomer, "customer_id">;
