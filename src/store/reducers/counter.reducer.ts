import { CounterAction } from "@/store/action-creators/actions/counter.action";
import { IAction } from "@/typings/interfaces/store/action.interfaace";

const counterReducer = (counter: number = 0, action: IAction) => {
  switch (action.type) {
    case CounterAction.ADD:
      return counter + action.payload;
    case CounterAction.SUB:
      return counter - action.payload;
    default:
      return counter;
  }
};

export { counterReducer };
