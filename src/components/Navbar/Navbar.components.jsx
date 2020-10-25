import React from 'react';
import './Navbar.styles.scss';
import { AiOutlineLogout, AiOutlineHome, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { auth } from './../../firebase/firebase.utils';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser, selectSidebar } from './../../Redux/User/user.selectors';
import { toggleSideBar } from './../../Redux/User/user.actions'

const Navbar = ({ currentUser, isSidebarOpen, toggleSidebar }) => {
    return (
        <div className="nav">
            <div className="nav__header" >
                {currentUser ? isSidebarOpen ?
                <AiOutlineClose onClick={() => toggleSidebar()} className="nav__header-icon" /> :
                <AiOutlineMenu onClick={() => toggleSidebar()} className="nav__header-icon" /> : ''}
                <h1 className="nav__heading"> Danbo International Schools </h1>
            </div>
            {currentUser &&
            <ul className="nav__list">
                <Link to="/" className="nav__link">
                    <span>Home</span>
                    <AiOutlineHome className="nav__link-icon" />
                </Link>
                <li className="nav__link" onClick={() => auth.signOut()}>
                    <span>Sign Out</span>
                    <AiOutlineLogout className="nav__link-icon" />
                </li>
            </ul>}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isSidebarOpen: selectSidebar
});

const mapDispatchToProps = dispatch => ({
    toggleSidebar: () => dispatch(toggleSideBar())
})

export default connect(mapStateToProps, mapDispatchToProps) (Navbar);
