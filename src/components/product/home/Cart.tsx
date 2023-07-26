import { useState } from "react";
import Heading1 from "@/components/fonts/Heading1";
import styles from "@/styles/components/product/home/cart.module.scss";
import { TextField } from "@mui/material";
import Image from "next/image";
import Input from "@/components/form/Input";
import OrderItem from "@/components/product/home/orders/OrderItem";
import Heading2 from "@/components/fonts/Heading2";
import OrangeBtn from "@/components/product/home/OrangeBtn";
import { PaymentMethod } from "@/typings/interfaces/payments/paymentMethod.interface";

function Cart() {
  const [name, setName] = useState<string>("Pratik");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("CASH");

  const togglePaymentMethod = (method: PaymentMethod) => {
    setPaymentMethod(method);
  };

  return (
    <div className={styles.cart}>
      {/* <Image height={307} width={248} src={"/menu/empty_cart.png"} alt={""} /> */}
      <Heading1>Order #23476</Heading1>
      <Input content={name} setContent={setName} bgColor="var(--bg1)" />
      <div className={styles.items}>
        <div className={styles.row}>
          <div className={styles.item_desc}>
            <span>Item</span>
            <span>Quantity</span>
          </div>
          <div className={styles.price}>
            <span>Price</span>
          </div>
        </div>
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </div>
      <div className={styles.checkout_section}>
        <div className={styles.checkout_section_wrapper}>
          <div className={styles.payment_mode}>
            <Heading2>Payment Mode</Heading2>
            <div className={styles.payment_opts}>
              <OrangeBtn
                active={paymentMethod === "CASH"}
                onClick={() => {
                  togglePaymentMethod("CASH");
                }}
              >
                Cash
              </OrangeBtn>
              <OrangeBtn
                active={paymentMethod === "UPI"}
                onClick={() => {
                  togglePaymentMethod("UPI");
                }}
              >
                UPI
              </OrangeBtn>
            </div>
          </div>
          <div className={styles.total}>
            <Heading2>Total</Heading2>
            <Heading1>$ 62</Heading1>
          </div>
        </div>
        <OrangeBtn
          active
          style={{ padding: "10px", boxShadow: "0px 0px 10px  var(--orange)" }}
        >
          Close Order
        </OrangeBtn>
      </div>
    </div>
  );
}

export default Cart;
