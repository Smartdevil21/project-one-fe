import { IOrder } from "@/typings/interfaces/order/order.interface";
import React from "react";
import styles from "@/styles/components/order/orderListing.module.scss";
import { Button } from "@mui/material";
import Link from "next/link";
import OrangeBtn from "../product/home/OrangeBtn";
import { useSelector } from "react-redux";
import { IStore } from "@/typings/interfaces/store/store.interface";

interface IProps {
  order: IOrder;
}

function OrderListing({ order }: IProps) {
  const customers = useSelector((store: IStore) => store.customers);
  return (
    <div className={styles.orderListing}>
      <p>
        <strong>OrderID:</strong>
        {order.row_id}
      </p>
      <p>
        <strong>Customer:</strong>
        {`${
          customers.find(
            (customer) => customer.customer_id === order.customer_id
          )?.customer_name
        }`}
      </p>
      {/* <p>
        <strong>Item:</strong>
        {order.item_id}
      </p> */}
      {/* <p>
        <strong>Quantity:</strong>
        {order.quantity}
      </p> */}
      <p>
        <strong>Created On:</strong>
        {order.created_at}
      </p>
      <Link href={`/orders/${order.customer_id}`}>
        <OrangeBtn>Details</OrangeBtn>
      </Link>
    </div>
  );
}

export default OrderListing;
