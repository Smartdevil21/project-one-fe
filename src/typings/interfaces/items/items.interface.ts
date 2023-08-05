export type ItemType = "KHARI" | "SANDWICH";

export interface IItem {
  item_id: number;
  item_name: string;
  item_category: ItemType;
  price: number;
}

export type ICreateItem = Omit<IItem, "item_id">;
