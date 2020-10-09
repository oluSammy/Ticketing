import React from 'react';
import { BiCheckDouble } from 'react-icons/bi';
// import Ticket from '../../components/Ticket/Ticket.component';

const Completed = () => {
    return (
        <div>
            <div className="overdue__header">
                <h3 className="overdue__heading">Completed Tasks</h3>
                <BiCheckDouble className="overdue__icon" />
            </div>
            <div className="tickets__container">
                {/* <Ticket />
                <Ticket />
                <Ticket />
                <Ticket /> */}
            </div>
        </div>
    )
}

export default Completed
