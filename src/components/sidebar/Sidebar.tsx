import styles from "@/styles/components/sidebar/sidebar.module.scss"
import Image from "next/image"
import Link from "next/link"

function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <ul>
        <li>
        <Link href={"#"} passHref><Image src={"/sidebar/home.svg"} width={24} height={24} alt={"home svg"} /></Link>
        </li>
        <li>
        <Link href={"#"} passHref><Image src={"/sidebar/chart-pie.svg"} width={24} height={24} alt={"home svg"} /></Link>
        </li>
        <li>
        <Link href={"#"} passHref><Image src={"/sidebar/newTab.svg"} width={24} height={24} alt={"home svg"} /></Link>
        </li>
        <li>
        <Link href={"#"} passHref><Image src={"/sidebar/live-24-regular.svg"} width={24} height={24} alt={"home svg"} /></Link>
        </li>
        <li>
        <Link href={"#"} passHref><Image src={"/sidebar/history-bold-duotone.svg"} width={24} height={24} alt={"home svg"} /></Link>
        </li>
        <li>
        <Link href={"#"} passHref><Image src={"/sidebar/setting.svg"} width={24} height={24} alt={"home svg"} /></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar