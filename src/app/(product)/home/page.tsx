import Heading1 from "@/components/fonts/Heading1";
import Heading2 from "@/components/fonts/Heading2";
import styles from "@/styles/app/product/home.module.scss";

function page() {
  return (
    <div className={styles.home}>
      <Heading1>Create New Order</Heading1>
      <Heading2>Wednesday, 19 Jul 2023</Heading2>
      <p>Hello there!</p>
    </div>
  );
}

export default page;
