import React, { useEffect } from "react";
import { baseService } from "@/services/base.service";
import { useSelector } from "react-redux";
import { IStore } from "@/typings/interfaces/store/store.interface";

function useWebSockets(): void {
  const socket = baseService.getSocket();

  useEffect(() => {
    socket.on("connection", () => {
      console.log("Connection to backend successful!");
    });
  }, []);
}

export default useWebSockets;
