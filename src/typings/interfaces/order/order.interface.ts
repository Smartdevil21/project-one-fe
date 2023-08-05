export interface IOrder {
  row_id: number;
  customer_id: number;
  created_at: string;
  item_id: number;
  quantity: number;
}

export type ICreateOrder = Omit<IOrder, "row_id" | "created_at">;
