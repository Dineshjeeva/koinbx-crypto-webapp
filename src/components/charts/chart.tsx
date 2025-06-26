/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import React, { useRef } from "react";

import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Tooltip
);

//  Line Chart Using Chart.js

interface Props {
  data: number[];
  color: string;
}

const SparklineChart: React.FC<Props> = ({ data, color }) => {
  const chartRef = useRef<any>(null);
  if (!data || data.length === 0) {
    return null; // prevent runtime error
  }
  const chartData = {
    labels: data.map((_, i) => i),
    datasets: [
      {
        label: "Trend",
        data,
        borderColor: color,
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    animation: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: 60, height: 50 }}>
      <Line ref={chartRef} data={chartData} options={options} />
    </div>
  );
};

export default SparklineChart;
