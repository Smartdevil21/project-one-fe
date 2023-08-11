import React from "react";
import styles from "@/styles/components/analytics/revenue.module.scss";
import Heading1 from "@/components/fonts/Heading1";

const Revenue = () => {
  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <Heading1>Total Revenue</Heading1>
      </div>
    </div>
  );
};

export default Revenue;
