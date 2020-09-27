import { BiCheckDouble } from 'react-icons/bi';
import React from 'react';
import './Resolved.styles.scss';
import Ticket from '../../components/Ticket/Ticket.component';


const Resolved = () => {
    return (
        <div className="resolved">
            <div className="overdue__header">
                <h3 className="overdue__heading">Resolved Tickets</h3>
                <BiCheckDouble className="overdue__icon" />
            </div>
            <div className="tickets__container">
                <Ticket />
                <Ticket />
                <Ticket />
                <Ticket />
            </div>
        </div>
    )
}

export default Resolved
