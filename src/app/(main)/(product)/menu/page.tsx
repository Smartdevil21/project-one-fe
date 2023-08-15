"use client";
import React, { useState } from "react";
import styles from "@/styles/app/product/menu.module.scss";
import useAuth from "@/hooks/useAuth";
import Loading from "@/components/loading/Loading";
import { ICreateItem, IItem } from "@/typings/interfaces/items/items.interface";
import { Button, Modal, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { IStore } from "@/typings/interfaces/store/store.interface";
import Image from "next/image";
import Menumodal from "@/components/modals/Menumodal";

function Menu() {
  const [loading, setLoading] = useState(true);
  useAuth(setLoading);
  const items = useSelector((store: IStore) => store.items);
  const [state, setState] = useState<
    ICreateItem & { active: undefined | number; open: boolean }
  >({
    item_category: "KHARI",
    item_name: "",
    price: 0,
    img: "/menu/chicken_burrito.png",
    active: undefined,
    open: false,
  });

  const handleOpenModal = (item_id?: number) => {
    if (item_id) {
      const selectedItem = items.filter((item) => item.item_id === item_id)[0];
      setState((prev) => ({ ...selectedItem, open: true, active: item_id }));
    } else {
      setState((prev) => ({
        item_category: "KHARI",
        item_name: "",
        price: 0,
        img: "/menu/chicken_burrito.png",
        active: undefined,
        open: true,
      }));
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <>
      <div className={styles.menu}>
        <h1>Menu page</h1>
        <Stack direction={"row"}>
          <h3>Create menu item: </h3>
          <Button
            size={"small"}
            onClick={() => {
              handleOpenModal();
            }}
          >
            Create Item
          </Button>
        </Stack>
        <span>Item List:</span>
        <div className={styles.item_wrapper}>
          {items.map((item, index) => {
            return (
              <Stack
                direction={"row"}
                width={"100%"}
                justifyContent={"space-between"}
                alignItems={"center"}
                key={`${item.item_id} ${index}`}
                className={styles.menu_item}
              >
                <Image
                  src={item.img}
                  height={30}
                  width={50}
                  alt={item.item_name}
                />
                <p>{item.item_name}</p>
                <p>{item.item_category}</p>
                <p>{item.item_id}</p>
                <p>{item.price}</p>
                <Stack direction={"row"}>
                  <Button
                    size="small"
                    onClick={() => {
                      handleOpenModal(item.item_id);
                    }}
                  >
                    Edit
                  </Button>
                  {/* <Button size="small">Delete</Button> */}
                </Stack>
              </Stack>
            );
          })}
        </div>
      </div>
      <Modal open={state.open}>
        <>
          <Menumodal setState={setState} state={state} />
        </>
      </Modal>
    </>
  );
}

export default Menu;
