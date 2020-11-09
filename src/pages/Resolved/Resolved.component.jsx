import React, { useEffect } from 'react';
import { BiCheckDouble } from 'react-icons/bi';
import './Resolved.styles.scss';
import Ticket from '../../components/Ticket/Ticket.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { asyncGetMoreResolved, asyncGetResolved } from './../../Redux/Resolved/Resolved.actions';
import { selectIsGettingResolved, selectResolvedTasks, selectResolvedPreviousDoc }
from './../../Redux/Resolved/Resolved.selectors';
import TicketLoader from './../../components/Ticket-Loader/Ticket-Loader.component';
import MoreButton from './../../components/MoreButton/MoreButton.component';
import EmptyTasks from '../../components/EmptyTasks/EmptyTasks.component';


const Resolved = ({ getResolvedTasks, isGettingResolved, resolved, prevDoc, getMoreResolved }) => {

    useEffect(() => {
        (async () => {
            !resolved && await getResolvedTasks()
        })();
    }, [getResolvedTasks, resolved]);

    const getMoreTasks = async () => {
        await getMoreResolved(prevDoc);
    }

    return (
        <div className="resolved" style={{minHeight: '85vh'}}>
            <div className="overdue__header">
                <h3 className="overdue__heading">Resolved Tickets</h3>
                <BiCheckDouble className="overdue__icon" />
            </div>
            {isGettingResolved ?
            <div className="tickets__container">
                <TicketLoader />
                <TicketLoader />
                <TicketLoader />
                <TicketLoader />
            </div> :
            <div className="tickets__container">
                {resolved && resolved.map(task => <Ticket key={task.id} ticket={task} type={'overdue'} />)}
                {resolved && resolved.length >= 20 && prevDoc !== undefined &&
                <div onClick={() => getMoreTasks()} style={{display: 'flex', justifyContent: 'center'}} >
                    <MoreButton />
                </div>}
            </div>}
            {resolved && !resolved.length &&
            <div className="empty-task-container">
                <EmptyTasks title='resolved' />
            </div>}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isGettingResolved: selectIsGettingResolved,
    resolved: selectResolvedTasks,
    prevDoc: selectResolvedPreviousDoc
});

const mapDispatchToProps = dispatch => ({
    getResolvedTasks: () => dispatch(asyncGetResolved()),
    getMoreResolved: prevDoc => dispatch(asyncGetMoreResolved(prevDoc))
})

export default connect(mapStateToProps, mapDispatchToProps) (Resolved)
