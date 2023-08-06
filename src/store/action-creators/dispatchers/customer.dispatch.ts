import { ICustomer } from "@/typings/interfaces/customer/customer.interface";
import { AnyAction, Dispatch } from "redux";
import { CustomerAction } from "../actions/customer.action";

export function setCustomersDispatch(payload: ICustomer[]) {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch({
      type: CustomerAction.SET,
      payload,
    });
  };
}
