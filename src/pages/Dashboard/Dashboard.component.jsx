import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar.components';
import Sidebar from '../../components/Sidebar/Sidebar.Component';
import DashboardMain from '../Dashboard-main/Dashboard-main.components';
import './Dashboard.styles.scss';
import { connect } from 'react-redux';
import { asyncGetICTStaffs } from './../../Redux/ict-staff/ictStaff.actions';
import { createStructuredSelector } from 'reselect';
import { selectSidebar } from '../../Redux/User/user.selectors';
import { Swipeable  } from 'react-swipeable';
import { toggleSideBar } from './../../Redux/User/user.actions';

const Dashboard = ({ getIctStaffs, sidebarHidden, toggleSidebar }) => {

    useEffect(() => {
        const getStaffs = async () => {
            await getIctStaffs();
        }
        getStaffs();
    }, [getIctStaffs]);

    const swipedRight = () => {
        sidebarHidden && toggleSidebar();
    }

    const swipedLeft = () => {
        !sidebarHidden && toggleSidebar();
    }

    let sidebarStyles = {};
    if(sidebarHidden && window.innerWidth < 580) {
        sidebarStyles = {
            transform: 'translateX(.1%)',
            width: '50vw'
        }
    }

    return (
        <div className="dashboard">
            <div className="dashboard__nav">
                <Navbar />
            </div>
            <div className="dashboard__sidebar" style={sidebarStyles}>
                <Sidebar />
            </div>
            <Swipeable onSwipedRight={() => swipedRight} onSwipedLeft={() => swipedLeft}
            className="dashboard__main">
                <DashboardMain />
            </Swipeable>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sidebarHidden: selectSidebar
});

const mapDispatchToProps = dispatch => ({
    getIctStaffs: () => dispatch(asyncGetICTStaffs()),
    toggleSidebar: () => dispatch(toggleSideBar())
});

export default connect(mapStateToProps, mapDispatchToProps) (Dashboard);
