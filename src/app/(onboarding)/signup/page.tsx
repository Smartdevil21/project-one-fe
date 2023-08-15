"use client";
import { ICreateUser } from "@/typings/interfaces/user/user.interface";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { AuthService } from "@/services/auth/auth.service";
import useDispatchers from "@/hooks/useDispatchers";
import { useRouter } from "next/navigation";

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
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          size="small"
          label="Username"
          type="text"
          value={user.username}
          onChange={(e) => {
            setUser((prev) => ({ ...prev, username: e.target.value }));
          }}
        />
        <TextField
          size="small"
          label="Email"
          type="email"
          value={user.email}
          onChange={(e) => {
            setUser((prev) => ({ ...prev, email: e.target.value }));
          }}
        />
        <TextField
          size="small"
          label="Password"
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
      <Link href={"/login"} passHref>
        Login
      </Link>
    </div>
  );
}

export default Signup;
