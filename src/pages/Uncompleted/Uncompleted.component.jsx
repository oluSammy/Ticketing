import React, { useEffect } from 'react';
import './Uncompleted.styles.scss'
import { BiMessageAltError } from 'react-icons/bi';
import Ticket from '../../components/Ticket/Ticket.component';
import { connect } from 'react-redux';
import { asyncGetMoreUncompleted, asyncGetUncompleted } from './../../Redux/Uncompleted/uncompleted.actions';
import { createStructuredSelector } from 'reselect';
import { selectIsGettingUncompleted } from '../../Redux/Uncompleted/uncompleted.selectors';
import { selectUncompletedTasks, selectUncompletedPrevDoc } from './../../Redux/Uncompleted/uncompleted.selectors';
import TicketLoader from '../../components/Ticket-Loader/Ticket-Loader.component';
import MoreButton from './../../components/MoreButton/MoreButton.component';

const Uncompleted = ({ getUncompletedTasks, isGettingTasks, uncompletedTasks, prevDoc, getMoreUncompleted }) => {

    useEffect(() => {
        const getTasks = async () => {
            await getUncompletedTasks();
        }
        !uncompletedTasks && getTasks();
    }, [getUncompletedTasks]);

    const getMoreTasks = async () => {
        await getMoreUncompleted(prevDoc)
    }

    return (
        <div className="uncompleted">
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
                    <div onClick={() => getMoreTasks()} style={{display: 'flex', justifyContent: 'center'}} >
                        <MoreButton />
                    </div>
                </div>
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    isGettingTasks: selectIsGettingUncompleted,
    uncompletedTasks: selectUncompletedTasks,
    prevDoc: selectUncompletedPrevDoc
})

const mapDispatchToProps = dispatch => ({
    getUncompletedTasks: () => dispatch(asyncGetUncompleted()),
    getMoreUncompleted: prevDoc => dispatch(asyncGetMoreUncompleted(prevDoc))
})

export default connect(mapStateToProps, mapDispatchToProps) (Uncompleted)
