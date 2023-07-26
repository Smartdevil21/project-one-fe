"use client";
import styles from "./counter.module.scss";
import { useSelector } from "react-redux";
import useDispatchers from "@/hooks/useDispatchers";
import { IStore } from "@/typings/interfaces/store/store.interface";

export default function Page() {
  const counter = useSelector((store: IStore) => store.counter);
  const { incrementDispatch, decrementDispatch } = useDispatchers();
  return (
    <div className={styles.counter}>
      <button
        onClick={() => {
          decrementDispatch(1);
        }}
      >
        -
      </button>
      <div>{counter}</div>
      <button
        onClick={() => {
          incrementDispatch(1);
        }}
      >
        +
      </button>
    </div>
  );
}
