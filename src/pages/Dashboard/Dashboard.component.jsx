import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar.components';
import Sidebar from '../../components/Sidebar/Sidebar.Component';
import DashboardMain from '../Dashboard-main/Dashboard-main.components';
import './Dashboard.styles.scss';
import { connect } from 'react-redux';
import { asyncGetICTStaffs } from './../../Redux/ict-staff/ictStaff.actions';

const Dashboard = ({ getIctStaffs }) => {

    useEffect(() => {
        const getStaffs = async () => {
            await getIctStaffs();
        }
        getStaffs();
    }, [getIctStaffs]);

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

const mapDispatchToProps = dispatch => ({
    getIctStaffs: () => dispatch(asyncGetICTStaffs())
})

export default connect(null, mapDispatchToProps) (Dashboard);
