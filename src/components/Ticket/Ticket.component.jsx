import React from 'react';
import './Ticket.styles.scss';
import { Link } from 'react-router-dom';
import { limitSentence } from './../../utility-functions/dateConversion';
import { BiCheckDouble } from 'react-icons/bi';
import { dateBeforeDeadline, timeStampToDate, dateAfterCompletion } from '../../utility-functions/dateToTimestamp';
import { AiOutlineFileDone } from 'react-icons/ai';

const Ticket = ({ ticket, type }) => {
    const { assigned, assignedTo, senderName, task, title, createdAt, deadline, completedOn, resolved } = ticket.data;

    return (
        <Link to={`/ticket/${ticket.id}`} className="ticket">
            <div className="ticket__header">
                { type === 'uncompleted' && <h4 className="ticket__status">Uncompleted</h4> }
                { type === 'unassigned' && <h4 className="ticket__status">unassigned</h4> }
                { type === 'overdue' && <h4 className="ticket__status">Overdue</h4> }
                { type === 'Due-Today' && <h4 className="ticket__status">Due Today</h4> }
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
                <span className="ticket__raised-by ticket__symbol">Raised by &rarr; </span>
                <h3 className="ticket__sender-name">{senderName}</h3>
            </div>
            <div className="ticket__details">
                <h5 className="ticket__created">Created - {timeStampToDate(createdAt)} </h5>
                {type === 'uncompleted' &&  <h6 className="ticket__assigned">{dateBeforeDeadline(deadline)}</h6>}
                {type === 'overdue' &&  <h6 className="ticket__assigned">{dateBeforeDeadline(deadline)}</h6>}
                {type === 'completed' &&  <h6 className="ticket__assigned">{dateAfterCompletion(completedOn)}</h6>}
                {/* <h6 className="ticket__assigned">Overdue by 12 days</h6> */}
            </div>
        </Link>
    );
}
// kk completed, createdAt,resolved, senderDesignation, senderEmail, selectUncompletedTasks,  ,
export default Ticket
