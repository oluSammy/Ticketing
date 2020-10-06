import React from 'react';
import './Ticket.styles.scss';
import { Link } from 'react-router-dom';

const Ticket = () => {
    return (
        <Link to="/ticket/myTicket" className="ticket" onClick={() => console.log('Hello')} >
            <div className="ticket__header">
                <h4 className="ticket__status">Due Today</h4>
                <div className="ticket__assigned-to">
                    <span className="ticket__symbol" >Assigned to &rarr; </span>
                    <h6 className="ticket__staff-assigned">IT Staff 2</h6>
                </div>
            </div>
            <h3 className="ticket__title">Release an album on the 25th of september</h3>
            <p className="ticket__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum. ...</p>
            <div className="ticket__sender">
                <span className="ticket__raised-by ticket__symbol">Raised by &rarr; </span>
                <h3 className="ticket__sender-name">Tory Lanez</h3>

            </div>
            <div className="ticket__details">
                <h5 className="ticket__created">Created 19 days ago</h5>
                <h6 className="ticket__assigned">Overdue by 12 days</h6>
            </div>
        </Link>
    )
}

export default Ticket
