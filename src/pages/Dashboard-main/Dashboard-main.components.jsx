import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DashboardHome from './../Dashboard-Home/DashboardHome.components';
import './Dashboard-main.components.scss';
import DueToday from './../DueToday/DueToday.component';

const DashboardMain = () => {
    return (
        <div className="dashboard-main">
            <Switch>
                <Route exact path={["/", "/dashboard"]} component={DashboardHome} />
                <Route exact path="/due" component={DueToday} />
            </Switch>
        </div>
    )
}

export default DashboardMain
