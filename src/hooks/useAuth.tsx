import { IStore } from "@/typings/interfaces/store/store.interface";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useDispatchers from "./useDispatchers";
import { AuthService } from "@/services/auth/auth.service";
import { useRouter } from "next/navigation";
import { ModuleResolutionKind } from "typescript";

// interface IProps {
//   setLoading?: Dispatch<SetStateAction<boolean>>;
// }

function useAuth(setLoading?: Dispatch<SetStateAction<boolean>>) {
  const router = useRouter();
  const user = useSelector((store: IStore) => store.user);
  const { setUserDispatch } = useDispatchers();

  const failedLogin = () => {
    setUserDispatch({ email: "", user_id: "", username: "" });
    // router.push("/login");
  };

  const validateAuthToken = async (token: string) => {
    const result = await AuthService.getInstance().tokenAuth(token);
    if (!result || !result.success || !result.data) return failedLogin();
    console.log(result.data);
    setUserDispatch(result.data);
    if (setLoading) setLoading(false);
  };

  useEffect(() => {
    if (user.user_id) return;
    const token = localStorage.getItem("lolm");
    if (token == null) return failedLogin();
    validateAuthToken(token);
  }, []);

  return user.user_id;
}

export default useAuth;
