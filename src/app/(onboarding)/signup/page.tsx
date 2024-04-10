"use client";
import { ICreateUser } from "@/typings/interfaces/user/user.interface";
import { Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { AuthService } from "@/services/auth/auth.service";
import useDispatchers from "@/hooks/useDispatchers";
import { useRouter } from "next/navigation";
import Styles from "@/styles/app/authPages.module.scss";

function Signup() {
  const router = useRouter();
  const { setUserDispatch } = useDispatchers();
  const authService = AuthService.getInstance();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<ICreateUser>({
    email: "",
    password: "",
    username: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await authService.signup(user);
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
      <Typography variant="h4">Create your account</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          size="small"
          placeholder="Username"
          type="text"
          value={user.username}
          onChange={(e) => {
            setUser((prev) => ({ ...prev, username: e.target.value }));
          }}
        />
        <TextField
          size="small"
          placeholder="Email"
          type="email"
          value={user.email}
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
          {loading ? "Loading" : "Signup"}
        </Button>
      </form>
      <Typography>
        Already have an account?{" "}
        <Link href={"/login"} passHref>
          Login
        </Link>
      </Typography>
    </div>
  );
}

export default Signup;
