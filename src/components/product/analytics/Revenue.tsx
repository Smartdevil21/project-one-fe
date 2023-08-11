import React from "react";
import styles from "@/styles/components/analytics/revenue.module.scss";
import Heading1 from "@/components/fonts/Heading1";
import Heading3 from "@/components/fonts/Heading3";

const Revenue = () => {
  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <div className={styles.icon}>icon</div>
        <div className={styles.content}>
          <Heading3>+22.93</Heading3>
          <p>as compared to yesterday</p>
        </div>
      </div>
      <div className={styles.mainheading}>
        {/* <Heading1>$12,234.00</Heading1> */}
        <h1>$12,234.00</h1>
        <h2>Total Revenue</h2>
      </div>
    </div>
  );
};

export default Revenue;
