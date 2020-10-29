import React, { useEffect } from 'react';
import { BiCheckDouble } from 'react-icons/bi';
import Ticket from '../../components/Ticket/Ticket.component';
import { connect } from 'react-redux';
import { asyncGetCompletedTasks, asyncGetMoreCompletedTask } from './../../Redux/Completed/completed.actions';
import { createStructuredSelector } from 'reselect';
import { selectCompletedTasks, selectIsGettingCompleted, selectCompletedPrevDoc } from './../../Redux/Completed/completed.selectors';
import TicketLoader from './../../components/Ticket-Loader/Ticket-Loader.component';
import MoreButton from './../../components/MoreButton/MoreButton.component';
import EmptyTasks from '../../components/EmptyTasks/EmptyTasks.component';

const Completed = ({ getCompletedTasks, completedTasks, isGettingCompletedTasks, prevDoc, getMoreCompletedTasks }) => {

    useEffect(() => {
        (async () => {
            !completedTasks && await getCompletedTasks();
        })();
    }, [getCompletedTasks, completedTasks]);

    const getMoreTasks = async () => {
        await getMoreCompletedTasks(prevDoc);
    }

    return (
        <div style={{minHeight: '87vh'}}>
            <div className="overdue__header">
                <h3 className="overdue__heading">Completed Tasks</h3>
                <BiCheckDouble className="overdue__icon" />
            </div>
            {isGettingCompletedTasks ?
                <div className="tickets__container">
                    <TicketLoader />
                    <TicketLoader />
                    <TicketLoader />
                    <TicketLoader />
                </div> :
                <div className="tickets__container">
                    {completedTasks && completedTasks.map(task => <Ticket key={task.id} ticket={task} type={'completed'} />)}
                    {prevDoc !== undefined &&
                    <div onClick={() => getMoreTasks(   )} style={{display: 'flex', justifyContent: 'center'}} >
                        <MoreButton />
                    </div>}
                </div>
            }
            {completedTasks && !completedTasks.length &&
                <div className="empty-task-container">
                    <EmptyTasks title='Completed' />
                </div>
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    completedTasks: selectCompletedTasks,
    isGettingCompletedTasks: selectIsGettingCompleted,
    prevDoc: selectCompletedPrevDoc
})

const mapDispatchToProps = dispatch => ({
    getCompletedTasks: () => dispatch(asyncGetCompletedTasks()),
    getMoreCompletedTasks: prevDoc => dispatch(asyncGetMoreCompletedTask(prevDoc))
})

export default connect(mapStateToProps, mapDispatchToProps) (Completed)
