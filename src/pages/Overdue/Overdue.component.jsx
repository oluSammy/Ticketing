import React from 'react'
import TicketLoader from './../../components/Ticket-Loader/Ticket-Loader.component';
import { BiCommentError } from 'react-icons/bi';
import './Overdue.styles.scss';

const Overdue = () => {
    return (
        <div className="overdue">
            <div className="overdue__header">
                <h3 className="overdue__heading">Overdue</h3>
                <BiCommentError className="overdue__icon" />
            </div>
            <div className="tickets__container">
                <TicketLoader />
                <TicketLoader />
                <TicketLoader />
                <TicketLoader />
            </div>
        </div>
    )
}

export default Overdue
