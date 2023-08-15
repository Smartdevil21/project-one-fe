export interface IUser {
  readonly user_id: string;
  username: string;
  email: string;
  password: string;
}

export type ICreateUser = Omit<IUser, "user_id">;

export type ILoginUser = Omit<IUser, "user_id" | "username">;

export interface ISignupResponse {
  success: boolean;
  data: {
    user: Omit<IUser, "password">;
    token: string;
  };
}

export interface ITokenAuthResponse {
  success: boolean;
  data: Omit<IUser, "password">;
}
