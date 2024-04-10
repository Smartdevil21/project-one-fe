"use client";
import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Styles from "@/styles/app/landingPage.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { AuthService } from "@/services/auth/auth.service";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const warmUpTheServer = async () => {
    setLoading(true);
    try {
      const res = await AuthService.getInstance().login({
        email: "",
        password: "",
      });
    } catch (error) {}
    setLoading(false);
  };

  useEffect(() => {
    warmUpTheServer();
  }, []);

  return (
    <main className={Styles.main}>
      <h1>Hello there. This would be our landing page.</h1>

      {loading ? (
        <Typography mt={2}>
          Warming up the servers. This may take up to 40 - 50 secs. Thank you
          for you patience.
        </Typography>
      ) : (
        <Typography>
          Login/Signup to head over to the main project built using web sockets.
        </Typography>
      )}
      <Stack direction={"row"} gap={2} mt={2}>
        {loading ? (
          <CircularProgress title="Warming up the servers" />
        ) : (
          <>
            <Link href={"/login"} passHref>
              <Button variant="outlined">Login</Button>
            </Link>
            <Link href={"/signup"} passHref>
              <Button variant="outlined">Signup</Button>
            </Link>
          </>
        )}
      </Stack>
    </main>
  );
}
