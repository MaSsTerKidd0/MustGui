import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto'

const LiveChart = () => {
  const [chart, setChart] = useState(null);
  const [data, setData] = useState({
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      // ... your datasets here
    ]
  });

  useEffect(() => {
    const ctx = document.getElementById("myChart").getContext("2d");
    const newChart = new Chart(ctx, {
      type: 'line', // or 'bar', 'pie', etc.
      data: data,
      options: {} // your chart options
    });

    setChart(newChart);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      updateChartData();
      chart.update();
    }, 2000); // Update chart every 2 seconds

    return () => clearInterval(interval);
  }, [chart, data]);

  const updateChartData = () => {
    // Logic to update chart data
    // For example, adding a new data point and removing the oldest one
  };

  return (
    <canvas id="myChart" width="400" height="150"></canvas>
  );
};

export default LiveChart;
