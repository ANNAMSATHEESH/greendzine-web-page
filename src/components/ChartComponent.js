import React from "react";
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components including PointElement
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement, // This is necessary for the Line chart
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = ({ barData, pieData, lineData }) => {
    // Data for the Bar Chart
    const barChartData = {
        labels: barData.map(item => item.label),
        datasets: [
            {
                label: "Bar Chart Data",
                data: barData.map(item => item.value),
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 1,
            },
        ],
    };

    // Data for the Pie Chart
    const pieChartData = {
        labels: pieData.map(item => item.label),
        datasets: [
            {
                label: "Pie Chart Data",
                data: pieData.map(item => item.value),
                backgroundColor: [
                    'rgba(24, 20, 243, 1)',
                    'rgba(250, 0, 255, 1)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                ],
            },
        ],
    };

    // Data for the Line Chart
    const lineChartData = {
        labels: lineData.map(item => item.label),
        datasets: [
            {
                label: "Monthly Data",
                data: lineData.map(item => item.value),
                borderColor: "rgba(75,192,192,1)",
                fill: false,
            },
        ],
    };

    return (
        <div className="DD">
            <h2>Line Chart</h2>
            <Line data={lineChartData} />
            <h2>Bar Chart</h2>
            <Bar data={barChartData} />
            <h2>Pie Chart</h2>
            <Pie className="PIE" data={pieChartData} />
        </div>
    );
};

export default ChartComponent;
