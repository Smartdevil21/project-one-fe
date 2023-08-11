"use client";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts/core";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DataZoomComponent,
} from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import React from "react";
import styles from "@/styles/components/analytics/analytics.module.scss";
import Heading3 from "@/components/fonts/Heading3";

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DataZoomComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
]);

function Analytics() {
  let base = +new Date(2016, 9, 3);
  let oneDay = 24 * 3600 * 1000;
  let valueBase = Math.random() * 300;
  let valueBase2 = Math.random() * 50;
  let data = [];
  let data2 = [];
  for (var i = 1; i < 10; i++) {
    var now = new Date((base += oneDay));
    var dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join(
      "-"
    );
    valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
    valueBase <= 0 && (valueBase = Math.random() * 300);
    data.push([dayStr, valueBase]);
    valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
    valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
    // data2.push([dayStr, valueBase2]);
  }

  const option = {
    title: {
      left: "left",
      text: "Sales Trend",
      textStyle: {
        color: "#FFFFFF",
      },
    },
    legend: {
      top: "bottom",
      data: ["Intention"],
    },
    tooltip: {
      triggerOn: "none",
      position: function (pt) {
        return [pt[0], 130];
      },
    },
    // toolbox: {
    //   left: "right",
    //   iconStyle: {
    //     color: "transparent",
    //     borderColor: "#FFFFFF", // Set the color of toolbox icons and text to white
    //   },
    //   itemSize: 25,
    //   top: 0,
    //   feature: {
    //     dataZoom: {
    //       yAxisIndex: "none",
    //     },
    //     restore: {},
    //   },
    // },
    xAxis: {
      type: "time",
      axisPointer: {
        value: "2016-10-7",
        snap: true,
        lineStyle: {
          color: "#FFFFFF",
          width: 2,
        },
        label: {
          show: true,
          formatter: function (params) {
            return echarts.format.formatTime("yyyy-MM-dd", params.value);
          },
          backgroundColor: "#FF785E",
        },
        handle: {
          show: false,
          color: "#FFFFFF",
        },
      },
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      axisTick: {
        inside: true,
      },
      axisLabel: {
        inside: true,
        formatter: "{value}\n",
      },
      splitLine: {
        show: true, // Show the split line grid background
        lineStyle: {
          color: "rgba(117, 117, 117, 0.4)", // Color of the dashed lines
          type: "dashed", // Type of the dashed lines
          width: 1, // Width of the dashed lines
        },
      },
      z: 10,
    },
    grid: {
      top: 70,
      left: 20,
      right: 20,
      height: 160,
    },
    dataZoom: [
      {
        type: "inside",
        throttle: 50,
      },
    ],
    series: [
      {
        name: "Fake Data",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 2,
        sampling: "average",
        itemStyle: {
          color: "#FF785E",
        },
        stack: "a",
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(255, 120, 94, 1)",
            },
            {
              offset: 1,
              color: "transparent",
            },
          ]),
        },
        data: data,
      },
      {
        name: "Fake Data",
        type: "line",
        smooth: true,
        stack: "a",
        symbol: "circle",
        symbolSize: 5,
        sampling: "average",
        itemStyle: {
          color: "FF785E",
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(213,72,120,0.8)",
            },
            {
              offset: 1,
              color: "rgba(213,72,120,0.3)",
            },
          ]),
        },
        data: data2,
      },
    ],
  };

  return (
    <>
      <div className={styles.main}>
        {/* <div className={styles.heading}>
          <Heading3>Sales Trend</Heading3>
        </div> */}
        <div className={styles.graph}>
          <ReactECharts option={option} />
        </div>
      </div>
    </>
  );
}

export default Analytics;
