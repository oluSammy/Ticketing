import React, { useEffect } from 'react';
import { MdAssignmentInd } from 'react-icons/md';
import Ticket from '../../components/Ticket/Ticket.component';
import { asyncGetMoreUnassigned, asyncGetUnassigned } from './../../Redux/Unassigned/Unassigned.actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUnassignedTasks, selectIsGettingUnassigned, newUnassignedPrevDoc }
from '../../Redux/Unassigned/Unassigned.selectors';
import TicketLoader from '../../components/Ticket-Loader/Ticket-Loader.component';
import MoreButton from './../../components/MoreButton/MoreButton.component';
import EmptyTasks from './../../components/EmptyTasks/EmptyTasks.component';

const Unassigned = ({ getUnassignedTasks, unassignedTasks, isGettingTasks, prevDoc, getMoreUnassigned }) => {

    useEffect(() => {
        (async () => {
            !unassignedTasks && await getUnassignedTasks();
        })()
    }, [getUnassignedTasks, unassignedTasks]);

    const getMoreTasks = async () => {
        await getMoreUnassigned(prevDoc);
    }

    return (
        <div style={{minHeight: '85vh'}}>
            <div className="overdue__header">
                <h3 className="overdue__heading">Tickets yet to be assigned</h3>
                <MdAssignmentInd className="overdue__icon" />
            </div>
            {isGettingTasks ?
                <div className="tickets__container">
                    <TicketLoader />
                    <TicketLoader />
                    <TicketLoader />
                    <TicketLoader />
                </div>:
            <div className="tickets__container">
                {unassignedTasks &&
                unassignedTasks.map(task => <Ticket key={task.id} ticket={task} type={'unassigned'} />)}
                {prevDoc !== undefined &&
                <div onClick={() => getMoreTasks()} style={{display: 'flex', justifyContent: 'center'}} >
                    <MoreButton />
                </div>}
            </div>}
            {unassignedTasks && !unassignedTasks.length &&
            <div className="empty-task-container">
                <EmptyTasks title={'unassigned'} />
            </div>}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    unassignedTasks: selectUnassignedTasks,
    isGettingTasks: selectIsGettingUnassigned,
    prevDoc: newUnassignedPrevDoc
})

const mapDispatchToProps = dispatch => ({
    getUnassignedTasks: () => dispatch(asyncGetUnassigned()),
    getMoreUnassigned: prevDoc => dispatch(asyncGetMoreUnassigned(prevDoc))
})

export default connect(mapStateToProps, mapDispatchToProps) (Unassigned);
