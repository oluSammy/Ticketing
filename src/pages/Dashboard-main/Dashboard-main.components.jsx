import React from 'react'
import { Route } from 'react-router-dom'
import DashboardHome from './../Dashboard-Home/DashboardHome.components';

const DashboardMain = () => {
    return (
        <div>
            <Route path="/dashboard" component={DashboardHome} />
        </div>
    )
}

export default DashboardMain
