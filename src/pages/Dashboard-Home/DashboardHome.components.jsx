import React from 'react';
import './DashboardHome.styles.scss';

import { CgAssign } from 'react-icons/cg'
import { BiCalendarWeek, BiCommentError } from 'react-icons/bi'
import { BiCheckDouble } from 'react-icons/bi';
import { MdAssignmentInd } from 'react-icons/md';

const DashboardHome = () => {
    return (
        <div className="dashboard-home">
            <div className="ticket-box-container">
                <div className="ticket-box">
                    <div className="ticket-box__header">
                        <div className="ticket-box__title">Due Today</div>
                        <BiCalendarWeek className="ticket-box__icon"/>
                    </div>
                    <div className="ticket-box__number">12</div>
                </div>
                <div className="ticket-box">
                    <div className="ticket-box__header">
                        <div className="ticket-box__title">Overdue</div>
                        <BiCommentError className="ticket-box__icon"/>
                    </div>
                    <div className="ticket-box__number">12</div>
                </div>
                <div className="ticket-box">
                    <div className="ticket-box__header">
                        <div className="ticket-box__title">Resolved</div>
                        <BiCheckDouble className="ticket-box__icon"/>
                    </div>
                    <div className="ticket-box__number">12</div>
                </div>
                <div className="ticket-box">
                    <div className="ticket-box__header">
                        <div className="ticket-box__title">Unresolved</div>
                        <BiCommentError className="ticket-box__icon"/>
                    </div>
                    <div className="ticket-box__number">12</div>
                </div>
                <div className="ticket-box">
                    <div className="ticket-box__header">
                        <div className="ticket-box__title">Assigned</div>
                        <MdAssignmentInd className="ticket-box__icon"/>
                    </div>
                    <div className="ticket-box__number">12</div>
                </div>
                <div className="ticket-box">
                    <div className="ticket-box__header">
                        <div className="ticket-box__title">Unassigned</div>
                        <CgAssign className="ticket-box__icon"/>
                    </div>
                    <div className="ticket-box__number">12</div>
                </div>
            </div>
        </div>
    )
}

export default DashboardHome
