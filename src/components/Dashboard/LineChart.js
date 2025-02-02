import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", target: 4000, sales: 3000, amt: 2400 },
  { name: "Tue", target: 3000, sales: 2800, amt: 2210 },
  { name: "wed", target: 4000, sales: 4500, amt: 2290 },
  { name: "Thur",target: 4000,sales: 4100, amt: 2000 },
  { name: "Fri", target: 5000, sales: 4800, amt: 2181 },
  { name: "Sat", target: 5000, sales: 5800, amt: 2500 },
  { name: "Sun", target: 6000, sales: 6500, amt: 2100 },
];

const CustomLineChart = ({ dataKey1, dataKey2, xAxisKey, lineColor }) => {
  return (
    <ResponsiveContainer width="100%" height={210}>
      <LineChart 
      data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line 
        type="monotone" 
        dataKey="sales" 
        stroke="blue"
        activeDot={{ r: 8}} />
        <Line 
        type="monotone" 
        dataKey="target" 
        stroke="red"
        activeDot={{ r: 8}} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;
