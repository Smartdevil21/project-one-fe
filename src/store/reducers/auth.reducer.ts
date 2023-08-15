import { IUser } from "@/typings/interfaces/user/user.interface";
import { AuthActions } from "../action-creators/actions/auth.action";
import { IAction } from "@/typings/interfaces/store/action.interfaace";

function authReducer(
  user: Omit<IUser, "password"> = { email: "", user_id: "", username: "" },
  action: IAction
) {
  switch (action.type) {
    case AuthActions.SET:
      return action.payload;

    default:
      return user;
  }
}

export { authReducer };
