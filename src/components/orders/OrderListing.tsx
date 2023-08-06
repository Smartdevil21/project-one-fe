import { IOrder } from "@/typings/interfaces/order/order.interface";
import React from "react";
import styles from "@/styles/components/order/orderListing.module.scss";
import { Button } from "@mui/material";
import Link from "next/link";

interface IProps {
  order: IOrder;
}

function OrderListing({ order }: IProps) {
  return (
    <div className={styles.orderListing}>
      <p>
        <strong>OrderID:</strong>
        {order.row_id}
      </p>
      <p>
        <strong>Customer:</strong>
        {order.customer_id}
      </p>
      <p>
        <strong>Item:</strong>
        {order.item_id}
      </p>
      <p>
        <strong>Quantity:</strong>
        {order.quantity}
      </p>
      <p>
        <strong>Created On:</strong>
        {order.created_at}
      </p>
      <Link href={`/orders/${order.customer_id}`}>Details</Link>
    </div>
  );
}

export default OrderListing;
