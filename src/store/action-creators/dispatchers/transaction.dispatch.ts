import { AnyAction, Dispatch } from "redux";
import { TransactionAction } from "../actions/transaction.action";
import { ITransaction } from "@/typings/interfaces/transaction/transaction.interface";

const setTransactionDispatch = (payload: ITransaction[]) => {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch({
      type: TransactionAction.SET,
      payload,
    });
  };
};

export { setTransactionDispatch };
