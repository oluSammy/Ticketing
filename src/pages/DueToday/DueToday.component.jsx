import React, { useEffect } from 'react';
import './DueToday.styles.scss';
import { BiCalendarWeek } from 'react-icons/bi';
// import Ticket from '../../components/Ticket/Ticket.component';
import { connect } from 'react-redux';
import { asyncGetDueToday, asyncGetMorDueToday } from './../../Redux/Due-Today/dueToday.actions';
import { createStructuredSelector } from 'reselect';
import { selectDue, selectIsGettingDueToday, selectDueTodayPrevDoc } from './../../Redux/Due-Today/dueToday.selectors';
import TicketLoader from '../../components/Ticket-Loader/Ticket-Loader.component';
import MoreButton from './../../components/MoreButton/MoreButton.component';
import Ticket from './../../components/Ticket/Ticket.component';

const DueToday = ({ getDueToday, dueToday, isGettingDueToday, prevDoc, getMoreDueToday }) => {

    useEffect(() => {
        const getTasks = async () => {
            !dueToday && await getDueToday();
        }
        getTasks();
    }, [getDueToday, dueToday]);

    const getMoreTasks = async () => {
        await getMoreDueToday(prevDoc);
    }

    return (
        <div className="due-today">
            <div className="due-today__header">
                <h2 className="due-today__heading">Due Today</h2>
                <BiCalendarWeek className="due-today__heading-icon" />
            </div>
            {isGettingDueToday ?
                <div className="tickets__container">
                    <TicketLoader />
                    <TicketLoader />
                    <TicketLoader />
                    <TicketLoader />
                    <TicketLoader />
                </div> :
                <div className="tickets__container">
                {dueToday && dueToday.map(task => <Ticket key={task.id} ticket={task} type={'Due-Today'} />)}
                {prevDoc !== undefined &&
                <div onClick={() => getMoreTasks()} style={{display: 'flex', justifyContent: 'center'}} >
                    <MoreButton />
                </div>}
            </div>
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    dueToday: selectDue,
    isGettingDueToday: selectIsGettingDueToday,
    prevDoc: selectDueTodayPrevDoc
})

const mapDispatchToProps = dispatch => ({
    getDueToday: () => dispatch(asyncGetDueToday()),
    getMoreDueToday: prevDoc => dispatch(asyncGetMorDueToday(prevDoc))
})

export default connect(mapStateToProps, mapDispatchToProps) (DueToday);
