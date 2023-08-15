"use client";
import useDispatchers from "@/hooks/useDispatchers";
import { AuthService } from "@/services/auth/auth.service";
import { ILoginUser } from "@/typings/interfaces/user/user.interface";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

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
    <div>
      <form onSubmit={handleSubmit}>
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
          {loading ? "Loading" : "Login"}
        </Button>
      </form>
      <Link href={"/signup"} passHref>
        Signup
      </Link>
    </div>
  );
}

export default Login;
