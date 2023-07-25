import styles from "@/styles/components/fonts/fonts.module.scss";

function Heading3({ children }: { children: React.ReactNode }) {
  return <span className={styles.heading3}>{children}</span>;
}

export default Heading3;
