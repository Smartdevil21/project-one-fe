import styles from "@/styles/components/product/home/menubar.module.scss";

function Menubar() {
  return (
    <nav className={styles.menubar}>
      <ul>
        <li className={styles.active}>Sandwich</li>
        <li>Khari</li>
        <li>Pastries</li>
        <li>Others</li>
        <li>Non Food</li>
        <div className={styles.underline} />
      </ul>
    </nav>
  );
}

export default Menubar;
