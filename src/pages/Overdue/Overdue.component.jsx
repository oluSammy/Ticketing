import React, { useEffect } from 'react';
import TicketLoader from './../../components/Ticket-Loader/Ticket-Loader.component';
import { BiCommentError } from 'react-icons/bi';
import './Overdue.styles.scss';
import { connect } from 'react-redux';
import { asyncGetDueTasks, asyncGetMoreDueTasks } from '../../Redux/Due/due.actions';
import { createStructuredSelector } from 'reselect';
import { selectIsGettingDue, selectOverdueTasks, selectDuePrevDoc } from './../../Redux/Due/due.selectors';
import Ticket from './../../components/Ticket/Ticket.component';
import MoreButton from './../../components/MoreButton/MoreButton.component';
import EmptyTasks from '../../components/EmptyTasks/EmptyTasks.component';

const Overdue = ({ getDueTasks, dueTasks, isGettingTasks, getMoreDueTasks, prevDoc }) => {

    useEffect(() => {
        const getTasks = async () => {
            !dueTasks && await getDueTasks();
        }
        getTasks();
    }, [getDueTasks, dueTasks]);

    const getMoreTasks = async () => {
        await getMoreDueTasks(prevDoc)
    }

    return (
        <div className="overdue">
            <div className="overdue__header">
                <h3 className="overdue__heading">Overdue</h3>
                <BiCommentError className="overdue__icon" />
            </div>
            {isGettingTasks ?
                <div className="tickets__container">
                    <TicketLoader />
                    <TicketLoader />
                    <TicketLoader />
                    <TicketLoader />
                </div> :
                <div className="tickets__container">
                    {dueTasks && dueTasks.map(task => <Ticket key={task.id} ticket={task} type={'overdue'} />)}
                    {prevDoc !== undefined &&
                    <div onClick={() => getMoreTasks()} style={{display: 'flex', justifyContent: 'center'}} >
                        <MoreButton />
                    </div>}
                </div>
            }
            {dueTasks && !dueTasks.length &&
            <div className="empty-task-container">
                <EmptyTasks title='due' />
            </div>}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    dueTasks: selectOverdueTasks,
    isGettingTasks: selectIsGettingDue,
    prevDoc: selectDuePrevDoc
})

const mapDispatchToProps = dispatch => ({
    getDueTasks: () => dispatch(asyncGetDueTasks()),
    getMoreDueTasks: prevDoc => dispatch(asyncGetMoreDueTasks(prevDoc))
})

export default connect(mapStateToProps, mapDispatchToProps) (Overdue);
