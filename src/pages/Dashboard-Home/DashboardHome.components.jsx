import React from 'react';
import './DashboardHome.styles.scss';

import { BiCalendarWeek, BiCommentError, BiTask } from 'react-icons/bi';
import { BiCheckDouble, BiMessageAltError } from 'react-icons/bi';
import { MdAssignmentInd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';

const DashboardHome = () => {
    return (
        <div className="dashboard-home">
            <div className="ticket-box-container">
                <Link to="/new-task" className="ticket-box">
                    <div className="ticket-box__header">
                        <div className="ticket-box__title">New Task</div>
                        <AiOutlineAppstoreAdd className="ticket-box__icon" style={{fill: 'maroon'}}/>
                    </div>
                    <div className="ticket-box__number">&#10021;</div>
                </Link>
                <Link to="/due" className="ticket-box">
                    <div className="ticket-box__header">
                        <div className="ticket-box__title">Due Today</div>
                        <BiCalendarWeek className="ticket-box__icon"/>
                    </div>
                    <div className="ticket-box__number">&#9775;</div>
                </Link>
                <Link to="/uncompleted" className="ticket-box">
                    <div className="ticket-box__header">
                        <div className="ticket-box__title">Uncompleted</div>
                        <BiMessageAltError className="ticket-box__icon" style={{fill: '#b71c1c '}} />
                    </div>
                    <div className="ticket-box__number">&#9854;</div>
                </Link>
                <Link  to="/overdue" className="ticket-box">
                    <div className="ticket-box__header">
                        <div className="ticket-box__title">Overdue</div>
                        <BiCommentError className="ticket-box__icon" style={{fill: 'red'}} />
                    </div>
                    <div className="ticket-box__number">&#9853;</div>
                </Link>
                <Link to="/resolved" className="ticket-box">
                    <div className="ticket-box__header">
                        <div className="ticket-box__title">Resolved</div>
                        <BiCheckDouble className="ticket-box__icon" style={{fill: 'green'}} />
                    </div>
                    <div className="ticket-box__number">&#9769;</div>
                </Link>
                <Link to="unassigned" className="ticket-box">
                    <div className="ticket-box__header">
                        <div className="ticket-box__title">Not Assigned</div>
                        <MdAssignmentInd className="ticket-box__icon" style={{fill: 'orangered'}} />
                    </div>
                    <div className="ticket-box__number">&#9830;</div>
                </Link>
                <Link to="/completed" className="ticket-box">
                    <div className="ticket-box__header">
                        <div className="ticket-box__title">Completed</div>
                        <BiTask className="ticket-box__icon" style={{fill: 'green'}} />
                    </div>
                    <div className="ticket-box__number">&#9883;</div>
                </Link>
            </div>
        </div>
    )
}

export default DashboardHome
