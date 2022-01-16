import { Box, Card } from "@mui/material";
import { merge } from "lodash";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { getTweetCounts } from "../requests/serverRequest";
import { BaseOptionChart } from "./charts";

const chartDataDefault = [
  {
    name: 'Team A',
    type: 'line',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
  },
  {
    name: 'Team B',
    type: 'line',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  }
];

export default function TweetCountChart({tag ,query}) {
  const [chartData, setchartData] = useState(chartDataDefault);
  let labelData = [...Array(50).keys()];

  useEffect(() => {
    async function fetchData() {
      const resp = await getTweetCounts({ query: query });
      setchartData([{
        name: tag.query,
        type: "line",
        data: resp.data,
      }]);
    }
    if (tag) fetchData();
  }, [query]);

  labelData = [...Array(chartData[0].data.length).keys()];

  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [2, 3] },
    plotOptions: { bar: { columnWidth: "11%", borderRadius: 4 } },
    fill: { type: ["solid", "solid"] },
    labels: labelData,
    xaxis: { type: "datetime" },
    tooltip: {
      shared: true,
      intersect: false,
      x: {
        formatter: (x) => {
          return `${labelData.length - x}h ago`;
        }
      },
      y: {
        formatter: (y) => {
          if (typeof y !== "undefined") {
            return `${y.toFixed(0)} tweets`;
          }
          return y;
        },
      },
    },
  });

  return (
    <Card>
      {/* <CardHeader title="Website Visits" subheader="(+43%) than last year" /> */}
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart
          type="line"
          series={chartData}
          options={chartOptions}
          height={225}
        />
      </Box>
    </Card>
  );
}
