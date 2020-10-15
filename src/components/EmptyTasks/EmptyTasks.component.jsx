import React from 'react';
import './EmptyTasks.styles.scss';
import { MdHourglassEmpty } from 'react-icons/md';

const EmptyTasks = ({ title }) => {
    return (
        <div className="empty-task">
            <MdHourglassEmpty className="empty-task__icon" />
            <h6 className="empty-task__text" >There are currently no {title} tasks</h6>
        </div>
    )
}

export default EmptyTasks
