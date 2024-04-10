"use client";
import useDispatchers from "@/hooks/useDispatchers";
import styles from "@/styles/components/sidebar/sidebar.module.scss";
import { IconButton, Tooltip } from "@mui/material";
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
          <Tooltip title={"Home"}>
            <Link href={"/home"} passHref>
              <Image
                src={"/sidebar/home.svg"}
                width={24}
                height={24}
                alt={"home svg"}
              />
            </Link>
          </Tooltip>
        </li>
        {/* <li>
          <Tooltip title={"Analytics"}>
            <Link href={"/analytics"} passHref>
              <Image
                src={"/sidebar/chart-pie.svg"}
                width={24}
                height={24}
                alt={"home svg"}
              />
            </Link>
          </Tooltip>
        </li> */}
        <li>
          <Tooltip title={"Orders"}>
            <Link href={"/orders"} passHref>
              <Image
                src={"/sidebar/newTab.svg"}
                width={24}
                height={24}
                alt={"home svg"}
              />
            </Link>
          </Tooltip>
        </li>
        <li>
          <Tooltip title={"Menu"}>
            <Link href={"/menu"} passHref>
              <Image
                src={"/sidebar/menu.svg"}
                width={24}
                height={24}
                alt={"home svg"}
              />
            </Link>
          </Tooltip>
        </li>
        {/* <li>
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
        </li> */}
      </ul>
      <IconButton onClick={handleLogout}>
        <Icon icon="material-symbols:logout" />
      </IconButton>
    </nav>
  );
}

export default Sidebar;
