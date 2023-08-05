import styles from "@/styles/app/product/layout.module.scss";
import Sidebar from "@/components/sidebar/Sidebar"

function HomeLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
      <div className={styles.home_layout}>
          <Sidebar />
          <div className={styles.wrapper}>{children}</div>
    </div>
  )
}

export default HomeLayout