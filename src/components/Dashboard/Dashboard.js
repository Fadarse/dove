import React from "react";
import { useMediaQuery } from "@mui/material";
import { Grid2, Card, CardContent, Typography } from "@mui/material";
import StatsCard from "./StatsCard";
import CustomLineChart from "./LineChart";
import CustomPieChart from "./PieChart";
import CustomBarChart from "./Barchart";
import Table from "./Table";
import CustomForm from "./CustomForm";
import DoughnutChart from "./DoughnutChart";

const Dashboard = () => {

	const isSmallScreen = useMediaQuery("(max-width:600px)");

	return (
		<div style={{ 
			marginTop: "4rem", 
			display: "grid",
			}}>
			<Grid2 container spacing={2}>
				<Grid2 container spacing={2}>
					<Grid2 item xs={12} sm={6} md={4} sx={{
						width: isSmallScreen ? "20rem" : "25rem",
					}}>
						<Card>
							<CardContent>
								<Typography variant="h6">Sales Record</Typography>
								<CustomBarChart />
							</CardContent>
						</Card>
					</Grid2>

					<Grid2 item xs={12} sm={6} md={4} sx={{
						width: isSmallScreen ? "20rem" : "25rem",
					}}>
						<Card>
							<CardContent>
								<Typography variant="h6">Cost to Revenue</Typography>
								<DoughnutChart />
							</CardContent>
						</Card>
					</Grid2>

					<Grid2 item xs={12} sm={6} md={4} sx={{
						width: isSmallScreen ? "20rem" : "25rem",
					}}>
						<Card>
							<CardContent>
								<Typography variant="h6">Profitability</Typography>
								<CustomPieChart />
							</CardContent>
						</Card>
					</Grid2>
				</Grid2>

				<Grid2 item xs={12} sm={12} md={8} sx={{
						width: isSmallScreen ? "20rem" : "51rem",
					}}>
					<Card>
						<CardContent>
							<Typography variant="h6">Targets</Typography>
							<CustomLineChart />
						</CardContent>
					</Card>
				</Grid2>

				<Grid2 container xs={12} sm={6} md={4} sx={{
						width: isSmallScreen ? "20rem" : "25rem",
						display:"grid",
					}}>
					<Card>
						<CardContent>
							<Typography variant="h6">Material Request</Typography>
						</CardContent>
					</Card>
					<Card>
						<CardContent>
							<Typography variant="h6">Production Form</Typography>
						</CardContent>
					</Card>
					<Card>
						<CardContent>
							<Typography variant="h6">Sales Form</Typography>
						</CardContent>
					</Card>
				</Grid2>
			</Grid2>
		</div>
	);
};

export default Dashboard;
