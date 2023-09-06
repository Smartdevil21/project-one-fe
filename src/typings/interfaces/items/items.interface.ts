export type ItemType =
  | "KHARI"
  | "SANDWICH"
  | "PASTRIES"
  | "OTHERS"
  | "NON-FOOD";

export interface IItem {
  item_id: number;
  item_name: string;
  item_category: ItemType;
  price: number;
  img: string;
}

export type ICreateItem = Omit<IItem, "item_id">;
