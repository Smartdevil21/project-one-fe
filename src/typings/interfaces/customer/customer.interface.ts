export interface ICustomer {
	customer_id: number;
	customer_name: string;
}

export type ICreateCustomer = Omit<ICustomer, "customer_id">;
