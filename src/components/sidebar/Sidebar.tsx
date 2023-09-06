"use client";
import useDispatchers from "@/hooks/useDispatchers";
import styles from "@/styles/components/sidebar/sidebar.module.scss";
import { IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

function Sidebar() {
  const router = useRouter();
  const { setUserDispatch } = useDispatchers();

  const handleLogout = () => {
    localStorage.removeItem("lolm");
    setUserDispatch({
      email: "",
      user_id: "",
      username: "",
    });
    router.push("/login");
  };

  return (
    <nav className={styles.sidebar}>
      <ul>
        <li>
          <Link href={"/home"} passHref>
            <Image
              src={"/sidebar/home.svg"}
              width={24}
              height={24}
              alt={"home svg"}
            />
          </Link>
        </li>
        <li>
          <Link href={"/analytics"} passHref>
            <Image
              src={"/sidebar/chart-pie.svg"}
              width={24}
              height={24}
              alt={"home svg"}
            />
          </Link>
        </li>
        <li>
          <Link href={"/orders"} passHref>
            <Image
              src={"/sidebar/newTab.svg"}
              width={24}
              height={24}
              alt={"home svg"}
            />
          </Link>
        </li>
        <li>
          <Link href={"/menu"} passHref>
            <Image
              src={"/sidebar/live-24-regular.svg"}
              width={24}
              height={24}
              alt={"home svg"}
            />
          </Link>
        </li>
        <li>
          <Link href={"#"} passHref>
            <Image
              src={"/sidebar/history-bold-duotone.svg"}
              width={24}
              height={24}
              alt={"home svg"}
            />
          </Link>
        </li>
        <li>
          <Link href={"#"} passHref>
            <Image
              src={"/sidebar/setting.svg"}
              width={24}
              height={24}
              alt={"home svg"}
            />
          </Link>
        </li>
      </ul>
      <IconButton onClick={handleLogout}>
        <Icon icon="material-symbols:logout" />
      </IconButton>
    </nav>
  );
}

export default Sidebar;
