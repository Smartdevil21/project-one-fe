"use client";
import React, { useState } from "react";
import styles from "@/styles/app/product/menu.module.scss";
import useAuth from "@/hooks/useAuth";
import Loading from "@/components/loading/Loading";
import {
  ICreateItem,
  IItem,
  ItemType,
} from "@/typings/interfaces/items/items.interface";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
} from "@mui/material";
import { useSelector } from "react-redux";
import { IStore } from "@/typings/interfaces/store/store.interface";
import Image from "next/image";
import Menumodal from "@/components/modals/Menumodal";

function Menu() {
  const [loading, setLoading] = useState(false);
  useAuth(setLoading);
  const items = useSelector((store: IStore) => store.items);
  const [activeCategory, setActiveCategory] = useState("ALL");
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
        <br />
        <Stack
          width={"100%"}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack
            direction={"row"}
            gap={5}
            alignItems={"center"}
            marginBottom={"15px"}
          >
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
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={2}
            className={styles.filter}
          >
            <strong>Filter By:</strong>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                size="small"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Category"
                value={activeCategory}
                onChange={(e) => {
                  setActiveCategory(e.target.value);
                }}
              >
                <MenuItem value="ALL">ALL</MenuItem>
                <MenuItem value="KHARI">KAHRI</MenuItem>
                <MenuItem value="SANDWICH">SANDWICH</MenuItem>
                <MenuItem value="PASTRIES">PASTRIES</MenuItem>
                <MenuItem value="OTHERS">OTHERS</MenuItem>
                <MenuItem value="NON-FOOD">NON-FOOD</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>
        {/* <span>
          <u>Item List:</u>
        </span> */}
        <div className={styles.item_wrapper}>
          <div className={styles.menu_item}>
            <div className={styles.img_wrapper}>
              <strong>Image</strong>
            </div>
            <strong>Name</strong>
            <strong>Category</strong>
            <strong>Item ID</strong>
            <strong>Price</strong>
            <Stack direction={"row"} justifyContent={"center"}>
              <strong> Actions</strong>
              {/* <Button size="small">Delete</Button> */}
            </Stack>
          </div>
          {(activeCategory === "ALL"
            ? items
            : items.filter((item) => item.item_category === activeCategory)
          ).map((item, index) => {
            return (
              <div
                key={`${item.item_id} ${index}`}
                className={styles.menu_item}
              >
                <div className={styles.img_wrapper}>
                  <Image src={item.img} alt={item.item_name} fill />
                </div>
                <p>{item.item_name}</p>
                <p>{item.item_category}</p>
                <p>{item.item_id}</p>
                <p>{item.price}</p>
                <Stack direction={"row"} justifyContent={"center"}>
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
              </div>
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
