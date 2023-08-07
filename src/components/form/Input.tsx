import React, { useState } from "react";
import styles from "@/styles/components/form/input.module.scss";
import Heading3 from "@/components/fonts/Heading3";

interface IProps {
  content?: any;
  bgColor?: string;
  setContent?: React.Dispatch<React.SetStateAction<any>>;
  placeholder?: string;
  type?: string;
  onChange?: (...args: any) => void;
  min?: any;
}

function Input({
  setContent,
  content,
  onChange,
  placeholder,
  bgColor = "var(--bg2)",
  type = "text",
  min,
}: IProps) {
  return (
    <div className={styles.input}>
      {/* <label htmlFor="name">Name</label> */}
      <input
        style={{ backgroundColor: bgColor }}
        type={type}
        onChange={(e) => {
          if (setContent) setContent(e.target.value);
          if (onChange) onChange(Number(e.target.value));
        }}
        value={content}
        // name="name"
        placeholder={placeholder}
        min={min}
      />
    </div>
  );
}

export default Input;
