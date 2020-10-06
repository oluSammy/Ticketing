import React from 'react';
import './NewTask.styles.scss';
import { IoIosCreate } from 'react-icons/io';

const NewTask = () => {
    return (
        <div className="new-task">
            <div className="new-task__header">
                <h2 className="new-task__heading">Create and assign a new Task</h2>
                <IoIosCreate className="new-task__icon" />
            </div>
            <form className="new-task__form">
                <div className="new-task__form-group">
                    <label htmlFor="name" className="new-task__label">Name:</label>
                    <input type="text" className="new-task__input" id="name" name="name"/>
                </div>
                <div className="new-task__form-group">
                    <label htmlFor="email" className="new-task__label">Email:</label>
                    <input type="email" className="new-task__input" id="email" name="email" />
                </div>
                <div className="new-task__form-group">
                    <label htmlFor="designation" className="new-task__label">Designation:</label>
                    <input type="text" className="new-task__input" id="designation" name="designation" />
                </div>
                <div className="new-task__form-group">
                    <label htmlFor="assign" className="new-task__label">Assign To:</label>
                    <select name="assign" id="assign" className="new-task__input">
                        <option value="test ICT">test ict</option>
                        <option value="test ICT 1">test ict 1</option>
                        <option value="test ICT 2">test ict 2</option>
                        <option value="test ICT 3">test ict 3</option>
                    </select>
                </div>
                <div className="new-task__form-group">
                    <label htmlFor="title" className="new-task__label">Deadline:</label>
                    <input className="new-task__input" type="date" name="new-task__date" id="new-task__date"/>
                </div>
                <div className="new-task__form-group">
                    <label htmlFor="title" className="new-task__label">Title:</label>
                    <input type="text" className="new-task__input" id="title" name="title" />
                </div>
                <div className="new-task__form-group">
                    <label htmlFor="task" className="new-task__label">Task</label>
                    <textarea className="new-task__input" name="task" id="task" cols="30" rows="4" ></textarea>
                </div>
                <input type="submit" value="Submit" className="new-task__btn" />
            </form>
        </div>
    )
}

export default NewTask;
