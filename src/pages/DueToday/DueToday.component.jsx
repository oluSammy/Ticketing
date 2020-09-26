import React from 'react';
import './DueToday.styles.scss';
import { BiCalendarWeek } from 'react-icons/bi';
import Ticket from '../../components/Ticket/Ticket.component';

const DueToday = () => {
    return (
        <div className="due-today">
            <div className="due-today__header">
                <h2 className="due-today__heading">Due Today</h2>
                <BiCalendarWeek className="due-today__heading-icon" />
            </div>
            <div className="tickets__container">
                <Ticket />
                <Ticket />
                <Ticket />
                <Ticket />
                <Ticket />
                <Ticket />
            </div>
        </div>
    )
}

export default DueToday;
