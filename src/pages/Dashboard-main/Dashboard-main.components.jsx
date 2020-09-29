import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DashboardHome from './../Dashboard-Home/DashboardHome.components';
import './Dashboard-main.components.scss';
import DueToday from './../DueToday/DueToday.component';
import Overdue from './../Overdue/Overdue.component';
import Resolved from './../Resolved/Resolved.component';
import Unassigned from './../Unassigned/Unassigned.component';
import Completed from './../Completed/Completed.component';
import RegisterStaff from './../RegisterStaff/RegisterStaff.component';

const DashboardMain = () => {
    return (
        <div className="dashboard-main">
            <Switch>
                <Route exact path={["/", "/dashboard"]} component={DashboardHome} />
                <Route exact path="/due" component={DueToday} />
                <Route exact path="/overdue" component={Overdue} />
                <Route exact path="/resolved" component={Resolved} />
                <Route exact path="/unassigned" component={Unassigned} />
                <Route exact path="/completed" component={Completed} />
                <Route exact path="/register-staff" component={RegisterStaff} />
            </Switch>
        </div>
    )
}

export default DashboardMain
