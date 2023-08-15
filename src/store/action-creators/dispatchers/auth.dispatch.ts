import { AnyAction, Dispatch } from "redux";
import { AuthActions } from "../actions/auth.action";
import { IUser } from "@/typings/interfaces/user/user.interface";

function setUserDispatch(payload: Omit<IUser, "password">) {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch({
      type: AuthActions.SET,
      payload,
    });
  };
}

export { setUserDispatch };
