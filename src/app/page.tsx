import { Button, Stack } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello there. This would be our landing page.</h1>
      <Stack direction={"row"}>
        <Link href={"/login"} passHref>
          <Button>Login</Button>
        </Link>
        <Link href={"/signup"} passHref>
          <Button>Signup</Button>
        </Link>
      </Stack>
    </main>
  );
}
