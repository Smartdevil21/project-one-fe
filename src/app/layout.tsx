"use client";
import "@/styles/globals.scss";
import { store } from "@/store/store";
import { Provider } from "react-redux";
// import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // console.log("Root layout rendered");
  // useEffect(() => {
  //   console.log("Root layout rendered");
  // }, []);

  return (
    <Provider store={store}>
      <html lang="en">
        <body className={"dark"}>{children}</body>
      </html>
    </Provider>
  );
}
