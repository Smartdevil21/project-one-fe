import React from "react";
import styles from "@/styles/components/analytics/payment.module.scss";
import Heading1 from "@/components/fonts/Heading1";

const Payment = () => {
  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <Heading1>Payment method</Heading1>
      </div>
    </div>
  );
};

export default Payment;
