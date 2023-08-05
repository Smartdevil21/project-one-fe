import React, { useEffect } from "react";
import { baseService } from "@/services/base.service";
// import { useSelector } from "react-redux";
// import { IStore } from "@/typings/interfaces/store/store.interface";
import { ICustomer } from "@/typings/interfaces/customer/customer.interface";

function useWebSockets(): void {
  const socket = baseService.getSocket();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connection to backend successful!");
    });

    socket.on("customer:created", (customers: ICustomer[]) => {
      console.log("Created Customer data recieved!");
      console.log(customers);
    });
  }, []);
}

export default useWebSockets;
