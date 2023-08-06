import { IAction } from "@/typings/interfaces/store/action.interfaace";
import { IItem } from "@/typings/interfaces/items/items.interface";
import { ItemAction } from "../action-creators/actions/item.action";

const itemReducer = (items: IItem[] = [], action: IAction) => {
  switch (action.type) {
    case ItemAction.SET:
      return action.payload;

    default:
      return items;
  }
};

export { itemReducer };
