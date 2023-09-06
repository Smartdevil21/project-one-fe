import Heading1 from "@/components/fonts/Heading1";
import Heading3 from "@/components/fonts/Heading3";
import styles from "@/styles/components/product/home/menuitem.module.scss";
import { IItem } from "@/typings/interfaces/items/items.interface";
import { IMenuItem } from "@/typings/interfaces/menu/menu-item.interface";
import {
  ICreateOrder,
  IOrder,
} from "@/typings/interfaces/order/order.interface";
import { Button } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { BaseService } from "@/services/base.service";

interface IProps {
  menuItem: IItem;
  customer_id: string;
  customerOrders: IOrder[];
  img: string;
}

function MenuItem({ menuItem, customer_id, customerOrders, img }: IProps) {
  const baseService = BaseService.getClassInstance();
  const disabled = !!customerOrders.find(
    (order) => order.item_id === menuItem.item_id
  );
  const [order, setOrder] = useState<ICreateOrder>({
    customer_id,
    item_id: menuItem.item_id,
    quantity: 1,
  });

  const handleAddOrderItem = () => {
    baseService.createOrder(order);
  };

  return (
    <div className={styles.menu_item}>
      <div className={styles.item_image}>
        <Image src={img} width={200} height={125} alt="menu-image" />
      </div>
      <div className={styles.desc}>
        <Heading3>{menuItem.item_name}</Heading3>
        <p>{"Some description"}</p>
      </div>
      <div className={styles.bottom}>
        <Heading1>$ {menuItem.price}</Heading1>
        <Button
          size="small"
          onClick={handleAddOrderItem}
          disabled={disabled}
          className={disabled ? styles.disabled : ""}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default MenuItem;
