import React from 'react';
import Navbar from '../../components/Navbar/Navbar.components';
import Sidebar from '../../components/Sidebar/Sidebar.Component';
import DashboardMain from '../Dashboard-main/Dashboard-main.components';
import './Dashboard.styles.scss';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard__nav">
                <Navbar />
            </div>
            <div className="dashboard__sidebar">
                <Sidebar />
            </div>
            <div className="dashboard__main">
                <DashboardMain />
            </div>
        </div>
    )
}

export default Dashboard;
