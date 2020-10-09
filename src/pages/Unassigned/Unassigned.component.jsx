import React from 'react';
import { MdAssignmentInd } from 'react-icons/md';
// import Ticket from '../../components/Ticket/Ticket.component';

const Unassigned = () => {
    return (
        <div>
            <div className="overdue__header">
                <h3 className="overdue__heading">Tickets yet to be assigned</h3>
                <MdAssignmentInd className="overdue__icon" />
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

export default Unassigned
