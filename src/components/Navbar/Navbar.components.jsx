import React from 'react';
import './Navbar.styles.scss';

import { AiOutlineLogout } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className="nav">
            <h1 className="nav__heading"> Danbo International Schools </h1>
            <ul className="nav__list">
                <li className="nav__link">
                    <span>Sign Out</span>
                    <AiOutlineLogout className="nav__link-icon" />
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
