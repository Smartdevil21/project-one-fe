export interface IOrder {
  row_id: number;
  customer_id: string;
  created_at: string;
  item_id: number;
  quantity: number;
}

export type ICreateOrder = Omit<IOrder, "row_id" | "created_at">;

export type IUpdateOrder = Pick<IOrder, "row_id"> &
  Partial<Omit<IOrder, "row_id">>;
