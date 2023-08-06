import { IItem } from "@/typings/interfaces/items/items.interface";
import { ItemAction } from "../actions/item.action";
import { AnyAction, Dispatch } from "redux";

const setItemsDispatch = (payload: IItem[]) => {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch({
      type: ItemAction.SET,
      payload,
    });
  };
};

export { setItemsDispatch };
