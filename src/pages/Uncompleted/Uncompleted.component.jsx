import React, { useEffect } from 'react';
import { BiMessageAltError } from 'react-icons/bi';
import Ticket from '../../components/Ticket/Ticket.component';
import { connect } from 'react-redux';
import { asyncGetUncompleted } from './../../Redux/Uncompleted/uncompleted.actions';
import { createStructuredSelector } from 'reselect';
import { selectIsGettingUncompleted } from '../../Redux/Uncompleted/uncompleted.selectors';
import { selectUncompletedTasks } from './../../Redux/Uncompleted/uncompleted.selectors';
import TicketLoader from '../../components/Ticket-Loader/Ticket-Loader.component';

const Uncompleted = ({ getUncompletedTasks, isGettingTasks, uncompletedTasks }) => {

    useEffect(() => {
        const getTasks = async () => {
            await getUncompletedTasks();
        }
        getTasks();
    }, [getUncompletedTasks]);

    return (
        <div>
            <div className="overdue__header">
                <h3 className="overdue__heading">Uncompleted Tasks</h3>
                <BiMessageAltError className="overdue__icon" />
            </div>
            {
                isGettingTasks && !uncompletedTasks ?
                <div className="tickets__container">
                    <TicketLoader />
                    <TicketLoader />
                    <TicketLoader />
                    <TicketLoader />
                </div> :
                <div className="tickets__container">
                    {uncompletedTasks &&
                    uncompletedTasks.map(task => <Ticket key={task.id} ticket={task} type='uncompleted' />)}
                </div>
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isGettingTasks: selectIsGettingUncompleted,
    uncompletedTasks: selectUncompletedTasks
})

const mapDispatchToProps = dispatch => ({
    getUncompletedTasks: () => dispatch(asyncGetUncompleted())
})

export default connect(mapStateToProps, mapDispatchToProps) (Uncompleted)
