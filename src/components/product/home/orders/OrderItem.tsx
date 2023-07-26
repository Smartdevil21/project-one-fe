import { useState } from "react";
import { Icon } from "@iconify/react";
import Input from "@/components/form/Input";
import styles from "@/styles/components/product/home/cart.module.scss";

function OrderItem() {
  const [note, setNote] = useState<string>("");
  const [num, setNum] = useState<number>(2);
  return (
    <div className={styles.order_item}>
      <div className={styles.item_desc}>
        {/* <span>Item</span>
        <span>Quantity</span> */}
        <div className={styles.details_wrapper}>
          <div className={styles.content_wrapper}>
            <div className={styles.specs}>
              <span>Four Cheese Pizza</span>
              <p>$ 13.50</p>
            </div>
            <div className={styles.quantity}>
              {/* <div className={styles.num}>2</div> */}
              <Input type="number" min={0} content={num} setContent={setNum} />
            </div>
          </div>
          <Input
            placeholder="Add Note"
            bgColor="var(--bg1)"
            content={note}
            setContent={setNote}
          />
        </div>
      </div>
      <div className={styles.price}>
        <span>$27</span>
        <button className={styles.del_btn}>
          <Icon icon="ic:outline-delete" color="red" />
        </button>
      </div>
    </div>
  );
}

export default OrderItem;
