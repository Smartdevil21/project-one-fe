"use client";
import useWebSockets from "@/hooks/useWebSockets";
import React from "react";

function SocketApplicationLayout({ children }: { children: React.ReactNode }) {
  useWebSockets();
  return <>{children}</>;
}

export default SocketApplicationLayout;
