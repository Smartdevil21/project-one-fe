"use client";
import OrderListing from "@/components/orders/OrderListing";
import useWebSockets from "@/hooks/useWebSockets";
import { IStore } from "@/typings/interfaces/store/store.interface";
import { createOrderSet } from "@/utils/createOrderSet.util";
import { getIncompleteOrders } from "@/utils/getIncompleteOrders.util";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import styles from "@/styles/app/product/orders.module.scss";
import { TextField } from "@mui/material";
import OrangeBtn from "@/components/product/home/OrangeBtn";
import Input from "@/components/form/Input";

function OrderPage() {
  useWebSockets();
  const [custName, setCustName] = useState("");
  const orders = useSelector((store: IStore) => store.orders);
  const transactions = useSelector((store: IStore) => store.transactions);

  const incompleteOrderSet = useMemo(() => {
    return createOrderSet(getIncompleteOrders({ orders, transactions }));
  }, [orders, transactions]);

  return (
    <div className={styles.orders}>
      <div className={styles.create_customer}>
        <Input
          content={custName}
          setContent={setCustName}
          placeholder="Customer Name"
        />
        <OrangeBtn>Create Order</OrangeBtn>
      </div>
      {incompleteOrderSet.map((order, index) => {
        return <OrderListing key={`${order.row_id} ${index}`} order={order} />;
      })}
    </div>
  );
}

export default OrderPage;
