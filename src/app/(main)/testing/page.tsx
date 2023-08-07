"use client";
import { CustomerService } from "@/services/customer/customer.service";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import { baseService } from "@/services/base.service";
import {
  ICreateItem,
  ItemType,
} from "@/typings/interfaces/items/items.interface";
import { itemService } from "@/services/item/item.service";
import { ICreateOrder } from "@/typings/interfaces/order/order.interface";
import { nanoid } from "@reduxjs/toolkit";

// const { createCustomer } = new CustomerService();

function QueryTesting() {
  const [name, setname] = useState("");

  // for items
  const [item, setItem] = useState<ICreateItem>({
    item_category: "KHARI",
    item_name: "",
    price: 0,
  });

  const [order, setOrder] = useState<ICreateOrder>({
    customer_id: "hello",
    item_id: 1,
    quantity: 0,
  });

  const handleCreateCustomer = () => {
    const customer_id = nanoid(20);
    baseService.createCustomer({ customer_name: name, customer_id });
  };

  const handleCreateItem = () => {
    baseService.createItem(item);
  };

  const handlePlaceOrder = () => {
    baseService.createOrder(order);
  };

  return (
    <div>
      <input
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <button onClick={handleCreateCustomer}>Create Customer</button>
      <br />
      <h1>For Items</h1>
      <input
        type="text"
        placeholder="Item name"
        value={item.item_name}
        onChange={(e) => {
          setItem((prev) => ({ ...prev, item_name: e.target.value }));
        }}
      />
      <select
        value={item.item_category}
        onChange={(e) => {
          setItem((prev) => ({
            ...prev,
            item_category: e.target.value as ItemType,
          }));
        }}
      >
        <option value="KHARI">KAHRI</option>
        <option value="SANDWICH">SANDWICH</option>
      </select>
      <input
        type="number"
        min={0}
        placeholder="Item name"
        value={item.price}
        onChange={(e) => {
          setItem((prev) => ({ ...prev, price: Number(e.target.value) }));
        }}
      />
      <button onClick={handleCreateItem}>Create Item</button>
      <br />
      <h1>Create Order</h1>
      <input
        type="number"
        min={0}
        placeholder="Cutsomer id"
        value={order.customer_id}
        onChange={(e) => {
          setOrder((prev) => ({
            ...prev,
            customer_id: e.target.value,
          }));
        }}
      />
      <input
        type="number"
        min={0}
        placeholder="Item id"
        value={order.item_id}
        onChange={(e) => {
          setOrder((prev) => ({
            ...prev,
            item_id: Number(e.target.value),
          }));
        }}
      />
      <input
        type="number"
        min={0}
        placeholder="Quantity"
        value={order.quantity}
        onChange={(e) => {
          setOrder((prev) => ({
            ...prev,
            quantity: Number(e.target.value),
          }));
        }}
      />
      <button onClick={handlePlaceOrder}>Plcae order</button>
    </div>
  );
}

export default QueryTesting;
