import { useMemo, useState } from "react";
import Heading1 from "@/components/fonts/Heading1";
import styles from "@/styles/components/product/home/cart.module.scss";
import { TextField } from "@mui/material";
import Image from "next/image";
import Input from "@/components/form/Input";
import OrderItem from "@/components/product/home/orders/OrderItem";
import Heading2 from "@/components/fonts/Heading2";
import OrangeBtn from "@/components/product/home/OrangeBtn";
import { PaymentMethod } from "@/typings/interfaces/payments/paymentMethod.interface";
import { useSelector } from "react-redux";
import { IStore } from "@/typings/interfaces/store/store.interface";
import { getOrdersBasedOnID } from "@/utils/getOrdersbasedOnId.util";
import { IOrder } from "@/typings/interfaces/order/order.interface";
import { getTotalCheckoutAmount } from "@/utils/getTotalAmount.util";
import { baseService } from "@/services/base.service";
import { useRouter } from "next/navigation";

interface IProps {
  orders: IOrder[];
}

function Cart({ orders }: IProps) {
  const navigator = useRouter();
  const items = useSelector((store: IStore) => store.items);
  const customers = useSelector((store: IStore) => store.customers);
  const customerName = customers.find(
    (ele) => ele.customer_id === orders[0].customer_id
  )?.customer_name;
  const totalAmount = useMemo(() => {
    return getTotalCheckoutAmount(orders, items);
  }, [items, orders]);
  const [name, setName] = useState<string | undefined>(customerName);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("CASH");

  const togglePaymentMethod = (method: PaymentMethod) => {
    setPaymentMethod(method);
  };

  const handleCloseOrder = () => {
    if (!orders[0].customer_id) return alert("No cutomer_id found!");
    baseService.createTransaction({
      customer_id: orders[0].customer_id,
      mode_of_payment: paymentMethod,
    });
    navigator.push("/orders");
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
        {orders.map((order, index) => {
          return <OrderItem key={`${order.row_id} ${index}`} order={order} />;
        })}
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
            <Heading1>$ {totalAmount}</Heading1>
          </div>
        </div>
        <OrangeBtn
          active
          style={{ padding: "10px", boxShadow: "0px 0px 10px  var(--orange)" }}
          onClick={handleCloseOrder}
        >
          Close Order
        </OrangeBtn>
      </div>
    </div>
  );
}

export default Cart;
