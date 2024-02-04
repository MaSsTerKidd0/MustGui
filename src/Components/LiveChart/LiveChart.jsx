import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

// Extended data array
const data = [
  { timestamp: '00:02:12', value: 4000 },
  { timestamp: '00:02:16', value: 3000 },
  { timestamp: '00:02:20', value: 2000 },
  { timestamp: '00:02:24', value: 3300 },
  { timestamp: '00:02:28', value: 3800 },
  { timestamp: '00:02:32', value: 3900 },
  { timestamp: '00:02:36', value: 3500 },
  { timestamp: '00:02:40', value: 3100 },
  { timestamp: '00:02:44', value: 4200 },
  { timestamp: '00:02:48', value: 4100 },
  { timestamp: '00:02:52', value: 4500 },
  { timestamp: '00:02:56', value: 4300 },
  { timestamp: '00:03:00', value: 4400 },
  { timestamp: '00:03:04', value: 4200 },
  { timestamp: '00:03:08', value: 4600 },
  { timestamp: '00:03:12', value: 4800 },
  // ... you can continue adding more data points
];

const LiveChart = () => (
  <ResponsiveContainer width="100%" height="100%">
    <LineChart
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timestamp" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
    </LineChart>
  </ResponsiveContainer>
);

export default LiveChart;
