"use client";
import useDispatchers from "@/hooks/useDispatchers";
import { AuthService } from "@/services/auth/auth.service";
import { ILoginUser } from "@/typings/interfaces/user/user.interface";
import { Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Styles from "@/styles/app/authPages.module.scss";

function Login() {
  const router = useRouter();
  const { setUserDispatch } = useDispatchers();
  const authService = AuthService.getInstance();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<ILoginUser>({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await authService.login(user);
      setUserDispatch(result.data.user);
      localStorage.setItem("lolm", result.data.token);
      router.push("/orders");
    } catch (error) {
      alert("Something went wrong!");
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <div className={Styles.main}>
      <Typography variant="h4">Log in</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          size="small"
          placeholder="Email"
          type="email"
          value={user.email}
          color="primary"
          onChange={(e) => {
            setUser((prev) => ({ ...prev, email: e.target.value }));
          }}
        />
        <TextField
          size="small"
          placeholder="Password"
          type="password"
          value={user.password}
          onChange={(e) => {
            setUser((prev) => ({ ...prev, password: e.target.value }));
          }}
        />
        <Button type={"submit"} disabled={loading}>
          {loading ? "Loading" : "Login"}
        </Button>
      </form>
      <Typography>
        Don&apos;t have an account?{" "}
        <Link href={"/signup"} passHref>
          Signup
        </Link>
      </Typography>
    </div>
  );
}

export default Login;
