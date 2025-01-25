import React from "react";

import { Grid2, Card, CardContent, BoxAppBar, Toolbar, IconButton, Typography, Drawer,AppBar, List, ListItem, ListItemText, CssBaseline, } from "@mui/material";
import StatsCard from "./StatsCard";
import CustomLineChart from "./LineChart";
import CustomPieChart from "./PieChart";
import CustomBarChart from "./Barchart";
import Table from "./Table";
import CustomForm from "./CustomForm";



const Dashboard = () => {
  const sampleLineChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const sampleBarChartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const samplePieChartData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const sampleTableData = [
    { id: 1, name: "John Doe", age: 28, city: "New York" },
    { id: 2, name: "Jane Smith", age: 34, city: "Chicago" },
    { id: 3, name: "Michael Johnson", age: 45, city: "San Francisco" },
  ];

  return (
    <Grid2 container spacing={3} className="dashboard">

      <Grid2 item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Line Chart</Typography>
            <CustomLineChart type="line" data={sampleLineChartData} />
          </CardContent>
        </Card>
      </Grid2>

      <Grid2 item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Bar Chart</Typography>
            <CustomBarChart type="bar" data={sampleBarChartData} />
          </CardContent>
        </Card>
      </Grid2>

      <Grid2 item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Pie Chart</Typography>
            <CustomPieChart type="pie" data={samplePieChartData} />
          </CardContent>
        </Card>
      </Grid2>

      <Grid2 item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6">Table</Typography>
            <Table data={sampleTableData} />
          </CardContent>
        </Card>
      </Grid2>

      <StatsCard />
      <StatsCard />
      <StatsCard />
      <StatsCard />

  

      

    </Grid2>
  );
};

export default Dashboard;
