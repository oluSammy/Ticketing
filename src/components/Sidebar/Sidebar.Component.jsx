import React from 'react';
import './sidebar.styles.scss';
import { GrUserManager } from 'react-icons/gr';
import { AiOutlineHome } from 'react-icons/ai';
import { CgAssign } from 'react-icons/cg'
import { BiCalendarWeek, BiCommentError, BiUserPlus } from 'react-icons/bi'
import { GoCalendar } from 'react-icons/go';
import { BiCheckDouble } from 'react-icons/bi';
import { FiUserPlus } from 'react-icons/fi';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__user">
                <div className="sidebar__user--bg">
                    <GrUserManager className="sidebar__user--icon"/>
                </div>
                <p className="sidebar__user--text sidebar__user--name">Aloye Israel</p>
                <p className="sidebar__user--text sidebar__user--designation">IT Manager</p>
            </div>
            <ul className="sidebar__list">
                <li className="sidebar__link">
                    <AiOutlineHome className="sidebar__link-icon" />
                    <span>Home</span>
                </li>
                <li className="sidebar__link">
                    <BiCalendarWeek className="sidebar__link-icon" />
                    <span>Due Today</span>
                </li>
                <li className="sidebar__link">
                    <GoCalendar className="sidebar__link-icon" />
                    <span>Overdue</span>
                </li>
                <li className="sidebar__link">
                    <BiCheckDouble className="sidebar__link-icon" />
                    <span>Resolved Tickets</span>
                </li>
                <li className="sidebar__link">
                    <CgAssign className="sidebar__link-icon" />
                    <span>Unassigned Tickets</span>
                </li>
                <li className="sidebar__link">
                    <BiCommentError className="sidebar__link-icon" />
                    <span>Unresolved Tickets</span>
                </li>
                <li className="sidebar__link">
                    <FiUserPlus className="sidebar__link-icon" />
                    <span>Register Staff</span>
                </li>
                <li className="sidebar__link">
                    <BiUserPlus className="sidebar__link-icon" />
                    <span>Register ICT Staff</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
