"use client";
import { IStore } from "@/typings/interfaces/store/store.interface";
import { getOrdersBasedOnID } from "@/utils/getOrdersbasedOnId.util";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Heading1 from "@/components/fonts/Heading1";
import Heading2 from "@/components/fonts/Heading2";
import Cart from "@/components/product/home/Cart";
import MenuItem from "@/components/product/home/MenuItem";
import Menubar from "@/components/product/home/Menubar";
import { menuItems } from "@/data/product/menu.data";
import styles from "@/styles/app/product/home.module.scss";
import { createOrderSet } from "@/utils/createOrderSet.util";
import { getIncompleteOrders } from "@/utils/getIncompleteOrders.util";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import Loading from "@/components/loading/Loading";

function CustomerOrder({ params }: { params: { customer_id: string } }) {
  const navigator = useRouter();

  const [loading, setLoading] = useState(false);
  useAuth(setLoading);

  const { transactions, items, orders } = useSelector((store: IStore) => ({
    orders: store.orders,
    items: store.items,
    transactions: store.transactions,
  }));

  const incompleteOrderSet = useMemo(() => {
    return createOrderSet(getIncompleteOrders({ orders, transactions }));
  }, [orders, transactions]);

  const customer_id = params.customer_id;

  const customerOrders = useMemo(() => {
    return getOrdersBasedOnID({
      id: customer_id,
      orders,
    });
  }, [customer_id, orders]);

  useEffect(() => {
    // To check if the customer is still in the pending order list
    const isOrderCompleted = !incompleteOrderSet.find(
      (order) => order.customer_id === customer_id
    );
    if (isOrderCompleted) navigator.push("/orders");
  }, [incompleteOrderSet]);

  return loading ? (
    <Loading />
  ) : (
    <div className={styles.home}>
      <div className={styles.menu_wrapper}>
        <Heading1>Create New Order</Heading1>
        <Heading2>Wednesday, 19 Jul 2023</Heading2>
        <Menubar />
        <div className={styles.menu_items}>
          {items.map((data, index) => {
            return (
              <MenuItem
                key={index}
                menuItem={data}
                customer_id={customer_id}
                customerOrders={customerOrders}
              />
            );
          })}
        </div>
      </div>
      <Cart orders={customerOrders} />
    </div>
  );
}

export default CustomerOrder;
