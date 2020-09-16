import React from 'react'
import Navbar from '../../components/Navbar/Navbar.components';
import './loginPage.styles.scss';

import { IoIosLogIn } from 'react-icons/io';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

const LoginPage = () => {
    return (
        <div className="login">
            <Navbar />
            <div className="login__box">
                <form className="login__form">
                    <div className="login__header">
                        <h2 className="login__heading">Sign In</h2>
                        <IoIosLogIn className="login__header--icon"/>
                    </div>
                    <div className="login__form-group">
                        <AiOutlineMail className="login__icon" />
                        <input className="login__form-input" type="text" name="email" id="email" placeholder="Email" />
                    </div>
                    <div className="login__form-group">
                        <RiLockPasswordLine className="login__icon" />
                        <input className="login__form-input" type="password" name="password" id="password" placeholder="password" />
                    </div>
                    <div className="login__form-group">
                        <input className="login__submit" type="submit" value="Sign In"/>
                    </div>
                    <p className="login__forgot">Forgot Password</p>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
