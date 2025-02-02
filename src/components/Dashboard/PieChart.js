import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const sampleData = [
  { name: "Delight Bread", value: 1200 },
  { name: "Meat Pie", value: 700 },
  { name: "Rice", value: 240 },
  { name: "Chicken", value: 97 },
];

const CustomPieChart = ({ data = sampleData }) => {
  return (
    <ResponsiveContainer width="100%" height={210}>
      <PieChart >
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius="90%"
          fill="#8884d8"
          dataKey="value"
        >
          {Array.isArray(data) && data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
