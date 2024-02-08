import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const LiveChart = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8080/dashboard/log');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      const newData = await fetchData();

      if (newData) {
        setData(newData); 
      }
    }, 2000); // Fetch new data every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <ResponsiveContainer width="95%" height="100%" >
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
        <XAxis dataKey="timestamp" stroke="#666" />
        <YAxis stroke="#666" />
        <Tooltip wrapperStyle={{ backgroundColor: '#fff', borderColor: 'lightblue' }} />
        <Line type="monotone" dataKey="packet_count" stroke="#82ca9d" strokeWidth={5} activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LiveChart;
