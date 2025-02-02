import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Height, Widgets, WidthFull } from '@mui/icons-material';
import { ResponsiveContainer } from 'recharts';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Cost', 'Revenue'],
    datasets: [
        {
            label: '# of Votes',
            data: [2400, 1500],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(16, 36, 101, 0.2)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 2,
        },
    ],
};

const DoughnutChart = () => {
    return (
        
            <ResponsiveContainer width="100%" height={210}>
                <Doughnut 
                    data={data}
                    options={{
                        maintainAspectRatio: false,
                        responsive: true,

                    }}
                />
            </ResponsiveContainer>
       
    );
};

export default DoughnutChart;