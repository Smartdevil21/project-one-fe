import styles from "@/styles/components/fonts/fonts.module.scss";

function Heading2({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <span className={styles.heading2}>{children}</span>
  )
}

export default Heading2