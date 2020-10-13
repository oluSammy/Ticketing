import React, { useEffect, useState } from 'react';
import './TicketPage.styles.scss';
import { AiOutlineFileDone } from 'react-icons/ai';
import { BiMessageSquareError } from 'react-icons/bi';
import { connect } from 'react-redux';
import { asyncAssignTicket, asyncGetTicket, asyncResolveTicket } from './../../Redux/Ticket/Ticket.actions';
import { useParams } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCurrentTicket, selectIsGettingTicket } from '../../Redux/Ticket/Ticket.selectors';
import { dateBeforeDeadline, timeStampToDate, dateAfterCompletion } from './../../utility-functions/dateToTimestamp';
import Loader from 'react-loader-spinner';
import { selectIctStaffs, selectIsGettingIctStaffs } from './../../Redux/ict-staff/ictStaff.selectors';
import { getDateFormat } from './../../utility-functions/dateConversion';

const TicketPage = ({ getTicket, isGettingTicket , ticket, isGettingIctStaffs, ictStaffs, assignTicket, resolveTicket }) => {
    let { id } = useParams();

    const [staff, setStaff] = useState("");
    const [deadline, setDeadline] = useState("");

    useEffect(() => {
        const getCurrentTicket = async () => {
            await getTicket(id)
        }
        getCurrentTicket();
    }, [getTicket, id]);

    const assignStaff = async e => {
        e.preventDefault();
        await assignTicket(id, `${staff}`, deadline);
    }

    return (
        <>
            {isGettingTicket ?
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25vh' }}>
                    <Loader
                        type="Circles"
                        color="#0A0A56"
                        height={75}
                        width={75}
                    />
                </div>
            : ticket &&
            <div className="ticket-page">
                <div className="ticket-page__header">
                    <div className="ticket-page__header-icon">&#10021;</div>
                    <div className="ticket-page__header-text">Ticket</div>
                </div>
                <div className="ticket-page__content">
                    <h6 className="ticket-page__label">Title:</h6>
                    <p className="ticket-page__key">{ticket.title}</p>
                </div>
                <div className="ticket-page__content">
                    <h6 className="ticket-page__label">Task:</h6>
                    <p className="ticket-page__key">{ticket.task}</p>
                </div>
                <div className="ticket-page__content">
                    <h6 className="ticket-page__label">Status:</h6>
                    <div className="ticket-page__key">
                        <p className="ticket-page__text">{ticket.completed ? 'Completed' : 'Uncompleted'}</p>
                    </div>
                </div>
                <div className="ticket-page__content">
                    <h6 className="ticket-page__label">Raised By:</h6>
                    <div className="ticket-page__k">
                        <p className="ticket-page__key">{ticket.senderName}</p>
                        <span> {ticket.senderDesignation}</span>
                    </div>
                </div>
                <div className="ticket-page__content">
                    {ticket.assignedTo ?
                    <h6 className="ticket-page__label">Assigned To:</h6> :
                    <h6 className="ticket-page__label">Assign To:</h6>
                    }
                    {ticket.assigned ?
                    <div className="ticket-page__key">{ticket.assignedTo}</div> :
                    <form className="ticket-page__key" onSubmit={assignStaff}
                        style={{display: 'flex', flexDirection: 'column'}}
                    >
                        <div className="ticket-page__form-group">
                            <label htmlFor="ticket-select">ICT Staff</label>
                            <select onChange={e => setStaff(e.target.value)}
                                name="ticket-select" id="ticket-select" className="ticket-page__select" required>
                                <option value="">Select Staff</option>
                                {isGettingIctStaffs ?
                                <option value="">loading</option>:
                                ictStaffs && ictStaffs.map(staff =>
                                    <option key={staff.id}
                                    value={`${staff.data.firstName} ${staff.data.surname}`}>
                                    {`${staff.data.firstName} ${staff.data.surname}`}</option>)}
                            </select>
                        </div>
                        <div className="ticket-page__form-group">
                            <label htmlFor="ticket-deadline">Deadline</label>
                            <input onChange={e => setDeadline(e.target.value)} required
                            type="date" name="ticket-deadline" id="ticket-deadline" min={getDateFormat()}/>
                        </div>
                        <input className="ticket-page__btn" type="submit"  value="Assign"/>
                    </form>}
                </div>
                <div className="ticket-page__content">
                    <h6 className="ticket-page__label">Created:</h6>
                    <p className="ticket-page__key" style={{fontFamily: 'sans-serif'}}>{timeStampToDate(ticket.createdAt)}</p>
                </div>
                <div className="ticket-page__content">
                    <h6 className="ticket-page__label">Deadline:</h6>
                    <div className="ticket-page__k" style={{fontFamily: 'sans-serif'}}>
                        <p className="ticket-page__key">{timeStampToDate(ticket.deadline)}</p>
                        <p className="ticket-page__key">{dateBeforeDeadline(ticket.deadline)}</p>
                    </div>
                </div>
                {ticket.completed &&
                <div className="ticket-page__content">
                    <h6 className="ticket-page__label">Completed:</h6>
                    <div className="ticket-page__k" style={{fontFamily: 'sans-serif'}}>
                        <p className="ticket-page__key">{timeStampToDate(ticket.completedOn)}</p>
                        <p className="ticket-page__key">{dateAfterCompletion(ticket.completedOn)}</p>
                    </div>
                </div>}
                {ticket.completed &&
                <div className="ticket-page__content">
                    <h6 className="ticket-page__label">Resolved?</h6>
                    <div className="ticket-page__k" style={{fontFamily: 'sans-serif'}}>
                        {ticket.resolved ?
                        <div className="ticket-page__resolve">
                            <h6 className="ticket-page__resolve-status">Resolved</h6>
                            <AiOutlineFileDone className="ticket-page__resolve-icon ticket-page__resolve-done" />
                        </div> :
                        <div className="ticket-page__resolve">
                            <h6 className="ticket-page__resolve-status">Unresolved</h6>
                            <BiMessageSquareError className="ticket-page__resolve-icon ticket-page__resolve-err" />
                            <button onClick={() => resolveTicket(id)}
                            className="ticket-page__resolve-action">Mark As Resolved</button>
                        </div>}
                    </div>
                </div>}
            </div>}
        </>
    )
};

const mapStateToProps = createStructuredSelector({
    isGettingTicket: selectIsGettingTicket,
    ticket: selectCurrentTicket,
    isGettingIctStaffs: selectIsGettingIctStaffs,
    ictStaffs: selectIctStaffs
})

const mapDispatchToProps = dispatch => ({
    getTicket: id => dispatch(asyncGetTicket(id)),
    assignTicket: (id, staff, deadline) => dispatch(asyncAssignTicket(id, staff, deadline)),
    resolveTicket: id => dispatch(asyncResolveTicket(id))
})

export default connect(mapStateToProps, mapDispatchToProps) (TicketPage)
