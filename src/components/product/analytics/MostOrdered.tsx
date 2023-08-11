"use client";
import ReactECharts from "echarts-for-react";
import styles from "@/styles/components/analytics/mostordered.module.scss";
import * as echarts from "echarts/core";
import { SunburstChart, SunburstSeriesOption } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import Heading1 from "@/components/fonts/Heading1";

echarts.use([SunburstChart, CanvasRenderer]);

type EChartsOption = echarts.ComposeOption<SunburstSeriesOption>;

const MostOrdered = () => {
  var data = [
    {
      name: "Grandpa",
      children: [
        {
          name: "Uncle Leo",
          value: 15,
          children: [
            {
              name: "Cousin Jack",
              value: 2,
            },
            {
              name: "Cousin Mary",
              value: 5,
              children: [
                {
                  name: "Jackson",
                  value: 2,
                },
              ],
            },
            {
              name: "Cousin Ben",
              value: 4,
            },
          ],
        },
        {
          name: "Father",
          value: 10,
          children: [
            {
              name: "Me",
              value: 5,
            },
            {
              name: "Brother Peter",
              value: 1,
            },
          ],
        },
      ],
    },
    {
      name: "Nancy",
      children: [
        {
          name: "Uncle Nike",
          children: [
            {
              name: "Cousin Betty",
              value: 1,
            },
            {
              name: "Cousin Jenny",
              value: 2,
            },
          ],
        },
      ],
    },
  ];

  const option = {
    series: {
      type: "sunburst",
      data: data,
      radius: [60, "90%"],
      itemStyle: {
        borderRadius: 7,
        borderWidth: 2,
      },
      label: {
        show: false,
      },
    },
  };

  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <Heading1>Analytics</Heading1>
      </div>
      <div className={styles.graph}>
        <ReactECharts option={option} />
      </div>
    </div>
  );
};

export default MostOrdered;