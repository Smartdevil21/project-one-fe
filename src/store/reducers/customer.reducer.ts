import { CustomerAction } from "@/store/action-creators/actions/customer.action";
import { ICustomer } from "@/typings/interfaces/customer/customer.interface";
import { IAction } from "@/typings/interfaces/store/action.interfaace";

const customerReducer = (customers: ICustomer[] = [], action: IAction) => {
  switch (action.type) {
    case CustomerAction.SET:
      return action.payload;

    default:
      return customers;
  }
};

export { customerReducer };
