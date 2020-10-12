import React, { useEffect } from 'react';
import './sidebar.styles.scss';
import { GrUserManager } from 'react-icons/gr';
import { AiOutlineHome } from 'react-icons/ai';
import { CgAssign } from 'react-icons/cg'
import { BiCalendarWeek, BiCommentError, BiUserPlus, BiMessageAltError } from 'react-icons/bi'
import { BiCheckDouble } from 'react-icons/bi';
import { FiUserPlus } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { MdAddCircleOutline } from 'react-icons/md';
import { connect } from 'react-redux';
import { selectCurrentUser, selectIsGettingUserDetail, selectUserDetail } from './../../Redux/User/user.selectors';
import { asyncGetUser } from '../../Redux/User/user.actions';
import { createStructuredSelector } from 'reselect';

const Sidebar = ({ currentUser, getUserDetails,isGettingUser, userDetail  }) => {

    useEffect(() => {
        (async () => {
            if (currentUser) {await getUserDetails(currentUser.uid)}
        }) ()
    }, [getUserDetails, currentUser]);

    return (
        <div className="sidebar">
            <div className="sidebar__user">
                <div className="sidebar__user--bg">
                    <GrUserManager className="sidebar__user--icon"/>
                </div>
                {isGettingUser ?
                    <div style={{textAlign: 'center'}}> * </div> :
                    userDetail &&
                    <div>
                        <p className="sidebar__user--text sidebar__user--name">{userDetail.designation}</p>
                        <p className="sidebar__user--text sidebar__user--designation">{userDetail.surname} {userDetail.firstName}</p>
                    </div>
                }
            </div>
            <ul className="sidebar__list">
                <NavLink to="/" className="sidebar__link" >
                    <AiOutlineHome className="sidebar__link-icon" />
                    <span>Home</span>
                </NavLink>
                <NavLink to="/new-task" className="sidebar__link" activeClassName="sidebar__active">
                    <MdAddCircleOutline className="sidebar__link-icon" />
                    <span>New Task</span>
                </NavLink>
                <NavLink to="/due" className="sidebar__link" activeClassName="sidebar__active">
                    <BiCalendarWeek className="sidebar__link-icon" />
                    <span>Due Today</span>
                </NavLink>
                <NavLink to="/overdue" className="sidebar__link" activeClassName="sidebar__active">
                    <BiCommentError className="sidebar__link-icon" />
                    <span>Overdue</span>
                </NavLink>
                <NavLink to="/resolved" className="sidebar__link" activeClassName="sidebar__active">
                    <BiCheckDouble className="sidebar__link-icon" />
                    <span>Resolved Tickets</span>
                </NavLink>
                <NavLink to="/unassigned" className="sidebar__link" activeClassName="sidebar__active">
                    <CgAssign className="sidebar__link-icon" />
                    <span>Unassigned Tickets</span>
                </NavLink>
                <NavLink to="/completed" className="sidebar__link" activeClassName="sidebar__active">
                    <BiCheckDouble className="sidebar__link-icon" />
                    <span>Completed </span>
                </NavLink>
                <NavLink to="/uncompleted" className="sidebar__link" activeClassName="sidebar__active">
                    <BiMessageAltError className="sidebar__link-icon" />
                    <span>Uncompleted </span>
                </NavLink>
                <NavLink to="/register-staff" className="sidebar__link" activeClassName="sidebar__active">
                    <FiUserPlus className="sidebar__link-icon" />
                    <span>Register Staff</span>
                </NavLink>
                <NavLink to="/register-ict" className="sidebar__link" activeClassName="sidebar__active">
                    <BiUserPlus className="sidebar__link-icon" />
                    <span>Register ICT Staff</span>
                </NavLink>
            </ul>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    getUserDetails: uid => dispatch(asyncGetUser(uid))
})

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isGettingUser: selectIsGettingUserDetail,
    userDetail: selectUserDetail
})

export default connect(mapStateToProps, mapDispatchToProps) (Sidebar);
