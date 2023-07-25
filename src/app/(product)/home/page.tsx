"use client";
import Heading1 from "@/components/fonts/Heading1";
import Heading2 from "@/components/fonts/Heading2";
import Cart from "@/components/product/home/Cart";
import MenuItem from "@/components/product/home/MenuItem";
import Menubar from "@/components/product/home/Menubar";
import { menuItems } from "@/data/product/menu.data";
import styles from "@/styles/app/product/home.module.scss";

function page() {
  return (
    <div className={styles.home}>
      <div className={styles.menu_wrapper}>
        <Heading1>Create New Order</Heading1>
        <Heading2>Wednesday, 19 Jul 2023</Heading2>
        <Menubar />
        <div className={styles.menu_items}>
          {menuItems.map((data, index) => {
            return <MenuItem key={index} menuItem={data} />;
          })}
        </div>
      </div>
      <Cart />
    </div>
  );
}

export default page;
