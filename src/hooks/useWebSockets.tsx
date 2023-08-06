import React, { useEffect } from "react";
import { baseService } from "@/services/base.service";
// import { useSelector } from "react-redux";
// import { IStore } from "@/typings/interfaces/store/store.interface";
import { ICustomer } from "@/typings/interfaces/customer/customer.interface";
import useDispatchers from "./useDispatchers";

function useWebSockets(): void {
  const {
    setOrderDispatch,
    setTransactionDispatch,
    setCustomersDispatch,
    setItemsDispatch,
  } = useDispatchers();
  const socket = baseService.getSocket();

  useEffect(() => {
    socket.on("connect", () => {
      socket.emit("order:list", ({ data }) => {
        setOrderDispatch(data);
      });
      socket.emit("transaction:list", ({ transactions }) => {
        setTransactionDispatch(transactions);
      });
      socket.emit("item:list", ({ items }) => {
        setItemsDispatch(items);
      });
      console.log("Connection to backend successful!");
    });

    socket.on("customer:created", (customers: ICustomer[]) => {
      setCustomersDispatch(customers);
    });

    socket.on("item:created", (items) => {
      console.log(items);
    });

    socket.on("order:created", (orders) => {
      console.log(orders);
      setOrderDispatch(orders);
    });
  }, [socket]);
}

export default useWebSockets;
