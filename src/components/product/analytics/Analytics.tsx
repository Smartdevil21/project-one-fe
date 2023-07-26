import React from "react";
import styles from "@/styles/components/analytics/analytics.module.scss";
import Heading3 from "@/components/fonts/Heading3";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";
import { radarChartData } from "@/data/analytics/radarchart.data";

function analytics() {
  return (
    <div className={styles.main}>
      <Heading3>Graph 1</Heading3>
      <div className={styles.graph}>
        <RadarChart
          outerRadius={90}
          width={730}
          height={250}
          data={radarChartData}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Radar
            name="Lily"
            dataKey="B"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </div>
    </div>
  );
}

export default analytics;
