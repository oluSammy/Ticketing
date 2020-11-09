import React, { useEffect } from 'react';
import './sidebar.styles.scss';
import { GrUserManager } from 'react-icons/gr';
import { AiOutlineHome } from 'react-icons/ai';
import { CgAssign } from 'react-icons/cg';
import { BiCalendarWeek, BiCommentError, BiUserPlus, BiMessageAltError } from 'react-icons/bi';
import { BiCheckDouble } from 'react-icons/bi';
import { FiUserPlus } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { MdAddCircleOutline } from 'react-icons/md';
import { connect } from 'react-redux';
import { selectCurrentUser, selectIsGettingUserDetail, selectUserDetail } from './../../Redux/User/user.selectors';
import { asyncGetUser } from '../../Redux/User/user.actions';
import { createStructuredSelector } from 'reselect';
import { toggleSideBar } from './../../Redux/User/user.actions';

const Sidebar = ({ currentUser, getUserDetails,isGettingUser, userDetail, toggleSidebar  }) => {

    useEffect(() => {
        (async () => {
            if (currentUser) {await getUserDetails(currentUser.uid)}
        }) ()
    }, [getUserDetails, currentUser]);

    const closeSideBar = () => {
        if(window.innerWidth < 500) {
            toggleSidebar();
        }
    }

    const sidebarLinks = [
        {
            link: '/',
            icon: <AiOutlineHome className="sidebar__link-icon" />,
            text: 'Home',
            NoActiveBg: false
        },
        {
            link: '/new-task',
            icon: <MdAddCircleOutline className="sidebar__link-icon" />,
            text: 'New Task',
            NoActiveBg: true
        },
        {
            link: '/due',
            icon: <BiCalendarWeek className="sidebar__link-icon" />,
            text: 'Due Today',
            NoActiveBg: true
        },
        {
            link: '/overdue',
            icon: <BiCommentError className="sidebar__link-icon" />,
            text: 'Overdue',
            NoActiveBg: true
        },
        {
            link: '/completed',
            icon: <BiCheckDouble className="sidebar__link-icon" />,
            text: 'Completed',
            NoActiveBg: true
        },
        {
            link: '/resolved',
            icon: <BiCheckDouble className="sidebar__link-icon" />,
            text: 'Resolved',
            NoActiveBg: true
        },
        {
            link: '/uncompleted',
            icon: <BiMessageAltError className="sidebar__link-icon" />,
            text: 'Uncompleted',
            NoActiveBg: true
        },
        {
            link: '/unassigned',
            icon: <CgAssign className="sidebar__link-icon" />,
            text: 'Unassigned Tickets',
            NoActiveBg: true
        },
        {
            link: '/register-staff',
            icon: <FiUserPlus className="sidebar__link-icon" />,
            text: 'Register Staff',
            NoActiveBg: true
        },
        {
            link: '/register-ict',
            icon: <BiUserPlus className="sidebar__link-icon" />,
            text: 'Register ICT Staff',
            NoActiveBg: true
        }
    ];

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
                {sidebarLinks.map(link =>
                    link.NoActiveBg ?
                    <NavLink key={link.text} to={link.link} className="sidebar__link" activeClassName="sidebar__active"
                    onClick={closeSideBar} >
                        {link.icon}
                        <span>{link.text}</span>
                    </NavLink> :
                    <NavLink key={link.text} to={link.link} className="sidebar__link" onClick={closeSideBar} >
                        {link.icon}
                        <span>{link.text}</span>
                    </NavLink>
                )}
            </ul>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    getUserDetails: uid => dispatch(asyncGetUser(uid)),
    toggleSidebar: () => dispatch(toggleSideBar())
})

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isGettingUser: selectIsGettingUserDetail,
    userDetail: selectUserDetail,
})

export default connect(mapStateToProps, mapDispatchToProps) (Sidebar);
