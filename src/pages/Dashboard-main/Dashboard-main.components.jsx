import React from 'react'
import { Route } from 'react-router-dom'
import DashboardHome from './../Dashboard-Home/DashboardHome.components';
import './Dashboard-main.components.scss';

const DashboardMain = () => {
    return (
        <div className="dashboard-main">
            <Route path="/dashboard" component={DashboardHome} />
        </div>
    )
}

export default DashboardMain
