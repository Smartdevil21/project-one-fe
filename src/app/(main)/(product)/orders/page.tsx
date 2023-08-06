"use client";
import OrderListing from "@/components/orders/OrderListing";
import useWebSockets from "@/hooks/useWebSockets";
import { IStore } from "@/typings/interfaces/store/store.interface";
import { createOrderSet } from "@/utils/createOrderSet.util";
import { getIncompleteOrders } from "@/utils/getIncompleteOrders.util";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";

function OrderPage() {
  useWebSockets();
  const orders = useSelector((store: IStore) => store.orders);
  const transactions = useSelector((store: IStore) => store.transactions);

  const incompleteOrderSet = useMemo(() => {
    return createOrderSet(getIncompleteOrders({ orders, transactions }));
  }, [orders, transactions]);

  return (
    <div>
      {incompleteOrderSet.map((order, index) => {
        return <OrderListing key={`${order.row_id} ${index}`} order={order} />;
      })}
    </div>
  );
}

export default OrderPage;
