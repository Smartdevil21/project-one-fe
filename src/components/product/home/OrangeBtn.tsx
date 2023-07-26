import { CSSProperties, MouseEventHandler } from "react";
import styles from "@/styles/components/product/home/orangeBtn.module.scss";

interface IProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
}

function OrangeBtn({
  children,
  active = false,
  onClick = () => {},
  style,
}: IProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${active && styles.active}`}
      style={style}
    >
      {children}
    </button>
  );
}

export default OrangeBtn;
