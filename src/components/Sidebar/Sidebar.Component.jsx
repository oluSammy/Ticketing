import React from 'react';
import './sidebar.styles.scss';
import { GrUserManager } from 'react-icons/gr';
import { AiOutlineHome } from 'react-icons/ai';
import { CgAssign } from 'react-icons/cg'
import { BiCalendarWeek, BiCommentError, BiUserPlus } from 'react-icons/bi'
import { BiCheckDouble } from 'react-icons/bi';
import { FiUserPlus } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

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
                <NavLink to="/" className="sidebar__link" >
                    <AiOutlineHome className="sidebar__link-icon" />
                    <span>Home</span>
                </NavLink>
                <NavLink to="/due" className="sidebar__link" activeClassName="sidebar__active">
                    <BiCalendarWeek className="sidebar__link-icon" />
                    <span>Due Today</span>
                </NavLink>
                <NavLink to="overdue" className="sidebar__link" activeClassName="sidebar__active">
                    <BiCommentError className="sidebar__link-icon" />
                    <span>Overdue</span>
                </NavLink>
                <NavLink to="resolved" className="sidebar__link" activeClassName="sidebar__active">
                    <BiCheckDouble className="sidebar__link-icon" />
                    <span>Resolved Tickets</span>
                </NavLink>
                <NavLink to="unassigned" className="sidebar__link" activeClassName="sidebar__active">
                    <CgAssign className="sidebar__link-icon" />
                    <span>Unassigned Tickets</span>
                </NavLink>
                <NavLink to="/completed" className="sidebar__link" activeClassName="sidebar__active">
                    <BiCheckDouble className="sidebar__link-icon" />
                    <span>Completed </span>
                </NavLink>
                <NavLink to="/register-staff" className="sidebar__link" activeClassName="sidebar__active">
                    <FiUserPlus className="sidebar__link-icon" />
                    <span>Register Staff</span>
                </NavLink>
                <li className="sidebar__link" activeClassName="sidebar__active">
                    <BiUserPlus className="sidebar__link-icon" />
                    <span>Register ICT Staff</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
