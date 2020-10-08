import React, { useState, useEffect } from 'react';
import './NewTask.styles.scss';
import { IoIosCreate } from 'react-icons/io';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCurrentUser, selectUserDetail } from './../../Redux/User/user.selectors';
import { getDateFormat } from './../../utility-functions/dateConversion';
import { asyncAddTicket } from './../../Redux/Add-Ticket/addTicket.actions';
import { selectIsAddingTicket } from '../../Redux/Add-Ticket/addTicket.selectors';

const NewTask = ({ currentUser, userDetail, addTask, isAddingTickets }) => {
    const [ticket, setTicket] =
    useState({ name: '',  email: currentUser ? currentUser.email : '',
    designation: '', assign: '', deadline: '', title: '', task: '' });

    useEffect(() => {
        userDetail &&
        setTicket({ ...ticket, name: `${userDetail.firstName} ${userDetail.surname}`,
        designation: userDetail.designation });
    }, [userDetail])

    const handleChange = e => {
        const { name, value } = e.target;
        setTicket({ ...ticket, [name]: value });
    }

    const createTask = async e => {
        e.preventDefault();
        await addTask(ticket);
        setTicket({ ...ticket, assign: '', deadline: '', title: '', task: '' });
    }

    return (
        <div className="new-task">
            <div className="new-task__header">
                <h2 className="new-task__heading">Create and assign a new Task</h2>
                <IoIosCreate className="new-task__icon" />
            </div>
            <form className="new-task__form" onSubmit={createTask}>
                <div className="new-task__form-group">
                    <label htmlFor="name" className="new-task__label">Name:</label>
                    <input type="text" className="new-task__input" id="name" name="name"
                    readOnly value={ticket.name} required />
                </div>
                <div className="new-task__form-group">
                    <label htmlFor="email" className="new-task__label">Email:</label>
                    <input type="email" className="new-task__input" id="email" name="email"
                    readOnly value={ticket.email} required />
                </div>
                <div className="new-task__form-group">
                    <label htmlFor="designation" className="new-task__label">Designation:</label>
                    <input type="text" className="new-task__input" id="designation" name="designation"
                    readOnly value={ticket.designation} required />
                </div>
                <div className="new-task__form-group">
                    <label htmlFor="assign" className="new-task__label">Assign To:</label>
                    <select name="assign" id="assign" className="new-task__input"
                    onChange={handleChange} required value={ticket.assign}>
                        <option value="">select ICT Staff</option>
                        <option value="test ICT 1">test ict 1</option>
                        <option value="test ICT 2">test ict 2</option>
                        <option value="test ICT 3">test ict 3</option>
                    </select>
                </div>
                <div className="new-task__form-group" onChange={handleChange}>
                    <label htmlFor="title" className="new-task__label">Deadline:</label>
                    <input className="new-task__input" type="date" name="deadline" id="deadline" min={getDateFormat()}
                    required value={ticket.deadline} />
                </div>
                <div className="new-task__form-group" onChange={handleChange}>
                    <label htmlFor="title" className="new-task__label">Title:</label>
                    <input type="text" className="new-task__input" id="title" name="title"
                    required value={ticket.title} />
                </div>
                <div className="new-task__form-group" onChange={handleChange}>
                    <label htmlFor="task" className="new-task__label">Task</label>
                    <textarea className="new-task__input" name="task" id="task" cols="30" rows="4" required value={ticket.task}
                    style={{padding: '1rem', fontSize: '1.9rem'}} />
                </div>
                {isAddingTickets ?
                <input type="submit" disabled={true} value="Submit" className="new-task__btn"
                style={{backgroundColor: '#3949ab ', cursor: 'no-drop'}} /> :
                <input type="submit" value="Submit" className="new-task__btn" /> }
            </form>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    userDetail: selectUserDetail,
    isAddingTickets: selectIsAddingTicket
});

const mapDispatchTProps = dispatch => ({
    addTask: ticket => dispatch(asyncAddTicket(ticket))
})

export default connect(mapStateToProps, mapDispatchTProps) (NewTask);
