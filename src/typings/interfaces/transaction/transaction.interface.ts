export interface ITransaction {
  transaction_id: number;
  customer_id: string;
  mode_of_payment: string;
}

export type ICreateTransaction = Omit<ITransaction, "transaction_id">;
