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
import { BaseService } from "@/services/base.service";
import { nanoid } from "@reduxjs/toolkit";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import Loading from "@/components/loading/Loading";

function OrderPage() {
  // useWebSockets();
  const navigator = useRouter();

  const [loading, setLoading] = useState(false);
  useAuth(setLoading);

  const baseService = BaseService.getClassInstance();
  const [custName, setCustName] = useState("");
  const orders = useSelector((store: IStore) => store.orders);
  const transactions = useSelector((store: IStore) => store.transactions);

  const incompleteOrderSet = useMemo(() => {
    return createOrderSet(getIncompleteOrders({ orders, transactions }));
  }, [orders, transactions]);

  const handleCreateCustomer = () => {
    if (!custName) return alert("Provide a valid Customer Name.");
    const customer_id = nanoid(20);
    baseService.createCustomer({ customer_id, customer_name: custName });
    // baseService.createOrder({ customer_id, item_id: 1, quantity: 0 });
    navigator.push(`/orders/${customer_id}`);
  };

  return loading ? (
    <Loading />
  ) : (
    <div className={styles.orders}>
      <div className={styles.create_customer}>
        <Input
          content={custName}
          setContent={setCustName}
          placeholder="Customer Name"
        />
        <OrangeBtn onClick={handleCreateCustomer}>Create Order</OrangeBtn>
      </div>
      {incompleteOrderSet.map((order, index) => {
        return <OrderListing key={`${order.row_id} ${index}`} order={order} />;
      })}
    </div>
  );
}

export default OrderPage;
