import React, { useEffect } from 'react';
import './TicketPage.styles.scss';
import { connect } from 'react-redux';
import { asyncGetTicket } from './../../Redux/Ticket/Ticket.actions';
import { useParams } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCurrentTicket, selectIsGettingTicket } from '../../Redux/Ticket/Ticket.selectors';
import { dateBeforeDeadline, timeStampToDate } from './../../utility-functions/dateToTimestamp';
import Loader from 'react-loader-spinner';
import { selectIctStaffs, selectIsGettingIctStaffs } from './../../Redux/ict-staff/ictStaff.selectors';

const TicketPage = ({ getTicket, isGettingTicket , ticket, isGettingIctStaffs, ictStaffs }) => {
    let { id } = useParams();

    useEffect(() => {
        const getCurrentTicket = async () => {
            await getTicket(id)
        }
        getCurrentTicket();
    }, [getTicket, id]);

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
                    <form className="ticket-page__key" >
                        <select name="ticket-select" id="ticket-select" className="ticket-page__select" required>
                            <option value="">Select Staff</option>
                            {isGettingIctStaffs ?
                            <option value="">loading</option>:
                            ictStaffs && ictStaffs.map(staff =>
                                <option key={staff.id}
                                value={`${staff.data.firstName} ${staff.data.surname}`}>
                                {`${staff.data.firstName} ${staff.data.surname}`}</option>)}
                        </select>
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
            </div>  }
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
    getTicket: id => dispatch(asyncGetTicket(id))
})

export default connect(mapStateToProps, mapDispatchToProps) (TicketPage)
