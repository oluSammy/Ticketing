import React from 'react';
import './DashboardHome.styles.scss';

import { BiCalendarWeek, BiCommentError, BiTask } from 'react-icons/bi';
import { BiCheckDouble } from 'react-icons/bi';
import { MdAssignmentInd } from 'react-icons/md';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
    return (
        <div className="dashboard-home">
            <div className="ticket-box-container">
                <Link to="/due" className="ticket-box">
                    <div className="ticket-box__header">
                        <div className="ticket-box__title">Due Today</div>
                        <BiCalendarWeek className="ticket-box__icon"/>
                    </div>
                    <div className="ticket-box__number">12</div>
                </Link>
                <Link  to="/overdue" className="ticket-box">
                    <div className="ticket-box__header">
                        <div className="ticket-box__title">Overdue</div>
                        <BiCommentError className="ticket-box__icon" style={{fill: 'red'}} />
                    </div>
                    <div className="ticket-box__number">12</div>
                </Link>
                <Link to="/resolved" className="ticket-box">
                    <div className="ticket-box__header">
                        <div className="ticket-box__title">Resolved</div>
                        <BiCheckDouble className="ticket-box__icon" style={{fill: 'green'}} />
                    </div>
                    <div className="ticket-box__number">12</div>
                </Link>
                <Link to="unassigned" className="ticket-box">
                    <div className="ticket-box__header">
                        <div className="ticket-box__title">Not Assigned</div>
                        <MdAssignmentInd className="ticket-box__icon" style={{fill: 'orangered'}} />
                    </div>
                    <div className="ticket-box__number">12</div>
                </Link>
                <Link to="/completed" className="ticket-box">
                    <div className="ticket-box__header">
                        <div className="ticket-box__title">Completed</div>
                        <BiTask className="ticket-box__icon" style={{fill: 'green'}} />
                    </div>
                    <div className="ticket-box__number">12</div>
                </Link>
            </div>
        </div>
    )
}

export default DashboardHome
