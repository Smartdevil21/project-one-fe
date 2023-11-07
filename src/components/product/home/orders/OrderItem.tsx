import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Input from "@/components/form/Input";
import styles from "@/styles/components/product/home/cart.module.scss";
import { IOrder } from "@/typings/interfaces/order/order.interface";
import { useSelector } from "react-redux";
import { IStore } from "@/typings/interfaces/store/store.interface";
import { BaseService } from "@/services/base.service";
import { Button, Stack } from "@mui/material";

interface IProps {
  order: IOrder;
}

function OrderItem({ order }: IProps) {
  const baseService = BaseService.getClassInstance();
  const items = useSelector((store: IStore) => store.items);
  const orderedItem = items.find(
    (item) => item.item_id === Number(order.item_id)
  );
  const [note, setNote] = useState<string>("");
  // const [num, setNum] = useState<number>(order.quantity);

  const handleUpdateQuantity = (qnty: number) => {
    // setOrderData((prev) => {
    //   baseService.updateOrder({ ...prev, quantity: qnty });
    //   return { ...prev, quantity: qnty };
    // });
    baseService.updateOrder({ ...order, quantity: order.quantity + qnty });
  };

  const handleDeleteOrder = () => {
    const res = confirm("You sure want to delete order?");
    if (res) baseService.deleteOrder(order.row_id);
  };

  useEffect(() => {
    console.log({ items, order });
  }, [order]);

  return (
    <div className={styles.order_item}>
      <div className={styles.item_desc}>
        {/* <span>Item</span>
        <span>Quantity</span> */}
        <div className={styles.details_wrapper}>
          <div className={styles.content_wrapper}>
            <div className={styles.specs}>
              <span>{orderedItem?.item_name}</span>
              <p>${orderedItem?.price}</p>
            </div>
            <div className={styles.quantity}>
              {/* <div className={styles.num}>2</div> */}
              {/* <Input
                type="number"
                min={0}
                content={orderData.quantity}
                onChange={handleUpdateQuantity}
              /> */}
              <Stack direction={"row"} alignItems={"center"} gap={2}>
                <div className={styles.qnty_num}>{order.quantity}</div>
                <Stack direction={"column"}>
                  <span
                    className={styles.change_qnty}
                    onClick={() => {
                      handleUpdateQuantity(1);
                    }}
                  >
                    +
                  </span>
                  <span
                    className={styles.change_qnty}
                    onClick={() => {
                      handleUpdateQuantity(-1);
                    }}
                  >
                    -
                  </span>
                </Stack>
              </Stack>
            </div>
          </div>
          <Input
            placeholder="Add Note"
            bgColor="var(--bg1)"
            content={note}
            setContent={setNote}
          />
        </div>
      </div>
      <div className={styles.price}>
        <span>$ {order.quantity * (orderedItem?.price || 0)}</span>
        <button className={styles.del_btn} onClick={handleDeleteOrder}>
          <Icon icon="ic:outline-delete" color="red" />
        </button>
      </div>
    </div>
  );
}

export default OrderItem;
