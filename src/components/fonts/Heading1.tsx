import styles from "@/styles/components/fonts/fonts.module.scss";

function Heading1({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <span className={styles.heading1}>{children}</span>
  )
}

export default Heading1