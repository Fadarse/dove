import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const sampleData = [
  { name: "Mon", bread: 4000, pastry: 2400  },
  { name: "Tue", bread: 3000, pastry: 1398  },
  { name: "Wed", bread: 2000, pastry: 9800  },
  { name: "Thur", bread: 2780, pastry: 3908 },
  { name: "Fri", bread: 1890, pastry: 4800  },
  { name: "Sat", bread: 2390, pastry: 3800  },
  { name: "Sun", bread: 3490, pastry: 4300  },
];

const CustomBarChart = ({ data = sampleData }) => {
  return (
    <ResponsiveContainer width="100%" height={210}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="bread" fill="#8884d8" />
        <Bar dataKey="pastry" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
