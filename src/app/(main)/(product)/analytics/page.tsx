// Main page for analytics
"use client";

import Heading1 from "@/components/fonts/Heading1";
import Heading2 from "@/components/fonts/Heading2";
import Echarts from "@/app/(main)/echarts/page";
import Analytics from "@/components/product/analytics/Analytics";
import styles from "@/styles/app/product/analytics.module.scss";
import MostOrdered from "@/components/product/analytics/MostOrdered";
import Revenue from "@/components/product/analytics/Revenue";
import Payment from "@/components/product/analytics/Payment";

function page() {
  return (
    <div className={styles.home}>
      <div className={styles.main_wrapper}>
        <div className={styles.left}>
          <div className={styles.heading}>
            <Heading1>Analytics</Heading1>
            <Heading2>Wednesday, 19 Jul 2023</Heading2>
          </div>
          <div className={styles.top}>
            <Revenue />
            <Revenue />
            <Revenue />
          </div>
          <div className={styles.data}>
            <Analytics />
          </div>
        </div>
        <div className={styles.right}>
          <MostOrdered />
          <Payment />
        </div>
      </div>
    </div>
  );
}

export default page;
