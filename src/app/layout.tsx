"use client";
import "@/styles/globals.scss";
import { store } from "@/store/store";
import { Provider } from "react-redux";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={"dark"}>{children}</body>
      </html>
    </Provider>
  );
}
