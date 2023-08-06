"use client";
import { IStore } from "@/typings/interfaces/store/store.interface";
import { getOrdersBasedOnID } from "@/utils/getOrdersbasedOnId.util";
import React from "react";
import { useSelector } from "react-redux";

function CustomerOrder({ params }: { params: { customer_id: string } }) {
  const orders = useSelector((store: IStore) => store.orders);
  const customerOrders = getOrdersBasedOnID({
    id: Number(params.customer_id),
    orders,
  });

  return (
    <div>
      {customerOrders.map((order, index) => {
        return (
          <p key={`${order.row_id} ${index}`}>
            ItemID: {order.item_id},___ Quantity:{order.quantity}
          </p>
        );
      })}
    </div>
  );
}

export default CustomerOrder;
