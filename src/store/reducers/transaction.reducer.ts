import { ITransaction } from "@/typings/interfaces/transaction/transaction.interface";
import { TransactionAction } from "../action-creators/actions/transaction.action";
import { IAction } from "@/typings/interfaces/store/action.interfaace";

const transactionReducer = (
  transactions: ITransaction[] = [],
  action: IAction
) => {
  switch (action.type) {
    case TransactionAction.SET:
      return action.payload;

    default:
      return transactions;
  }
};

export { transactionReducer };
