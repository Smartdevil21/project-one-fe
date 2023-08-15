// Main page for analytics
"use client";

import Heading1 from "@/components/fonts/Heading1";
import Heading2 from "@/components/fonts/Heading2";
import Loading from "@/components/loading/Loading";
// import Analytics from "@/components/product/analytics/analytics";
import Analytics from "@/components/product/analytics/Analytics";
import useAuth from "@/hooks/useAuth";
import styles from "@/styles/app/product/analytics.module.scss";
import { useState } from "react";

function AnalyticsPage() {
  const [loading, setLoading] = useState(false);
  useAuth(setLoading);

  return loading ? (
    <Loading />
  ) : (
    <div className={styles.home}>
      <div className={styles.main_wrapper}>
        <Heading1>Analytics</Heading1>
        <Heading2>Wednesday, 19 Jul 2023</Heading2>
        <div className={styles.main_graph}>
          <Analytics />
        </div>
      </div>
    </div>
  );
}

export default AnalyticsPage;
