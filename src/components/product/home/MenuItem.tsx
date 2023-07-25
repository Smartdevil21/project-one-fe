import Heading1 from "@/components/fonts/Heading1";
import Heading3 from "@/components/fonts/Heading3";
import styles from "@/styles/components/product/home/menuitem.module.scss";
import { IMenuItem } from "@/typings/interfaces/menu/menu-item.interface";
import { Button } from "@mui/material";
import Image from "next/image";

interface IProps {
  menuItem: IMenuItem;
}

function MenuItem({ menuItem }: IProps) {
  return (
    <div className={styles.menu_item}>
      <div className={styles.item_image}>
        <Image src={menuItem.img} width={200} height={125} alt="menu-image" />
      </div>
      <div className={styles.desc}>
        <Heading3>{menuItem.heading}</Heading3>
        <p>{menuItem.description}</p>
      </div>
      <div className={styles.bottom}>
        <Heading1>$ {menuItem.price}</Heading1>
        <Button size="small">Add to Cart</Button>
      </div>
    </div>
  );
}

export default MenuItem;
