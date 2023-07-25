import styles from "@/styles/components/product/home/cart.module.scss";
import Image from "next/image";

function Cart() {
  return (
    <div className={styles.cart}>
      <Image height={307} width={248} src={"/menu/empty_cart.png"} alt={""} />
    </div>
  );
}

export default Cart;
