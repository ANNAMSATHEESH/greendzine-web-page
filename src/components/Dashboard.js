import React, { useEffect, useState } from "react";
import ChartComponent from "./ChartComponent";
import dashboardData from "../data/dashboardData.json"; // Assuming you have this JSON file with your data
import './Dashboard.css'; // Include CSS for styling if needed

const Dashboard = () => {
    const [barData, setBarData] = useState([]);
    const [pieData, setPieData] = useState([]);
    const [lineData, setLineData] = useState([]);

    useEffect(() => {
        // Example data structure for bar and pie charts
        setBarData(dashboardData.bar); // Assuming dashboardData.bar is an array of objects with label and value
        setPieData(dashboardData.pie); // Assuming dashboardData.pie is an array of objects with label and value
        setLineData(dashboardData.line); // Assuming dashboardData.line is an array of objects with label and value
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <ChartComponent barData={barData} pieData={pieData} lineData={lineData} />
        </div>
    );
};

export default Dashboard;