import React from 'react';
import './Ticket.styles.scss';
import { Link } from 'react-router-dom';
import { limitSentence } from './../../utility-functions/dateConversion';
import { BiCheckDouble } from 'react-icons/bi';
import { dateBeforeDeadline, timeStampToDate, dateAfterCompletion } from '../../utility-functions/dateToTimestamp';

const Ticket = ({ ticket, type }) => {
    const { assigned, assignedTo, senderName, task, title, createdAt, deadline, completedOn, resolved } = ticket.data;

    return (
        <Link to={`/ticket/${ticket.id}`} className="ticket">
            <div className="ticket__header">
                {resolved ? <h4 className="ticket__status">Resolved<span><BiCheckDouble /></span></h4> :
                <h4 className="ticket__status">Unresolved  </h4>}
                <div className="ticket__assigned-to">
                    {assigned ?
                        <span className="ticket__symbol" >Assigned to &rarr; </span>: 'Unassigned'
                }
                <h6 className="ticket__staff-assigned">{assignedTo}</h6>
                </div>
            </div>
            <h3 className="ticket__title">{title}</h3>
            <p className="ticket__content">{limitSentence(task)}.</p>
            <div className="ticket__sender">
                <span className="ticket__raised-by ticket__symbol">Raised by </span>
                <h3 className="ticket__sender-name">{senderName}</h3>
            </div>
            <div className="ticket__details">
                <h5 className="ticket__created">Created - {timeStampToDate(createdAt)} </h5>
                {type === 'uncompleted' && deadline && <h6 className="ticket__assigned">{dateBeforeDeadline(deadline)}</h6>}
                {type === 'overdue' &&  <h6 className="ticket__assigned">{dateBeforeDeadline(deadline)}</h6>}
                {type === 'Due-Today' &&  <h6 className="ticket__assigned">{dateBeforeDeadline(deadline)}</h6>}
                {type === 'completed' &&  <h6 className="ticket__assigned">{dateAfterCompletion(completedOn)}</h6>}
            </div>
        </Link>
    );
}
export default Ticket
