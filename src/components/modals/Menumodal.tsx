import React from "react";
import styles from "@/styles/components/modals/menuModal.module.scss";
import {
  ICreateItem,
  IItem,
  ItemType,
} from "@/typings/interfaces/items/items.interface";
import { Icon } from "@iconify/react";
import { Button, IconButton, Stack, TextField } from "@mui/material";
import { BaseService } from "@/services/base.service";

interface IProps {
  setState: React.Dispatch<
    React.SetStateAction<
      ICreateItem & { active: undefined | number; open: boolean }
    >
  >;
  state: ICreateItem & { active: undefined | number; open: boolean };
}

function Menumodal({ setState, state }: IProps) {
  const baseService = BaseService.getClassInstance();
  const handleCloseModal = () => {
    setState((prev) => ({ ...prev, open: false }));
  };

  const handleSubmit = () => {
    if (!state.active) {
      console.log("called create Item");
      baseService.createItem({
        img: state.img,
        item_category: state.item_category,
        item_name: state.item_name,
        price: state.price,
      });
    } else {
      console.log("called update Item");
      baseService.updateItem({
        img: state.img,
        item_category: state.item_category,
        item_id: state.active,
        item_name: state.item_name,
        price: state.price,
      });
    }
    handleCloseModal();
  };

  return (
    <div className={styles.menu_modal}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <h1>{state.active ? "Edit Item" : "Create Item"}</h1>
        <IconButton onClick={handleCloseModal}>
          <Icon icon="ic:round-close" />
        </IconButton>
      </Stack>
      <form>
        <TextField
          type="text"
          placeholder="Item name"
          size={"small"}
          value={state.item_name}
          onChange={(e) => {
            setState((prev) => ({ ...prev, item_name: e.target.value }));
          }}
        />
        <select
          value={state.item_category}
          onChange={(e) => {
            setState((prev) => ({
              ...prev,
              item_category: e.target.value as ItemType,
            }));
          }}
        >
          <option value="KHARI">KAHRI</option>
          <option value="SANDWICH">SANDWICH</option>
        </select>
        <TextField
          type="number"
          size={"small"}
          placeholder="Item Price"
          value={state.price}
          onChange={(e) => {
            setState((prev) => ({ ...prev, price: Number(e.target.value) }));
          }}
        />
        <TextField
          type="text"
          size={"small"}
          placeholder="Item Image Url"
          value={state.img}
          onChange={(e) => {
            setState((prev) => ({ ...prev, img: e.target.value }));
          }}
        />
        <Button size={"small"} onClick={handleSubmit}>
          {state.active ? "Edit" : "Create"} Item
        </Button>
      </form>
    </div>
  );
}

export default Menumodal;
