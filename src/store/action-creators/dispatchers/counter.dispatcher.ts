import { CounterAction } from "@/store/action-creators/actions/counter.action";
import { AnyAction, Dispatch } from "redux";

const incrementDispatch = (payload: number) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: CounterAction.ADD,
            payload
        })
    }
}

const decrementDispatch = (payload: number) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: CounterAction.SUB,
            payload
        })
    }
}

export { incrementDispatch, decrementDispatch };