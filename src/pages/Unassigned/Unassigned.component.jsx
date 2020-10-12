import React, { useEffect } from 'react';
import { MdAssignmentInd } from 'react-icons/md';
import Ticket from '../../components/Ticket/Ticket.component';
import { asyncGetUnassigned } from './../../Redux/Unassigned/Unassigned.actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUnassignedTasks, selectIsGettingUnassigned } from '../../Redux/Unassigned/Unassigned.selectors';
import TicketLoader from '../../components/Ticket-Loader/Ticket-Loader.component';

const Unassigned = ({ getUnassignedTasks, unassignedTasks, isGettingTasks  }) => {

    useEffect(() => {
        (async () => {
            !unassignedTasks && await getUnassignedTasks();
        })()
    }, [getUnassignedTasks, unassignedTasks]);

    return (
        <div>
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
                {unassignedTasks && unassignedTasks.map(task => <Ticket key={task.id} ticket={task} type={'unassigned'} />)}
            </div>}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    unassignedTasks: selectUnassignedTasks,
    isGettingTasks: selectIsGettingUnassigned
})

const mapDispatchToProps = dispatch => ({
    getUnassignedTasks: () => dispatch(asyncGetUnassigned())
})

export default connect(mapStateToProps, mapDispatchToProps) (Unassigned);
