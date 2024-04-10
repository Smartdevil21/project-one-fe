import { Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Styles from "@/styles/app/landingPage.module.scss";

export default function Home() {
  return (
    <main className={Styles.main}>
      <h1>Hello there. This would be our landing page.</h1>
      <Typography>
        Login/Signup to head over to the main project built using web sockets.
      </Typography>
      <Stack direction={"row"} gap={2} mt={2}>
        <Link href={"/login"} passHref>
          <Button variant="outlined">Login</Button>
        </Link>
        <Link href={"/signup"} passHref>
          <Button variant="outlined">Signup</Button>
        </Link>
      </Stack>
    </main>
  );
}
