import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar.components';
import './loginPage.styles.scss';

import { IoIosLogIn } from 'react-icons/io';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { auth } from './../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { asyncGetUser } from '../../Redux/User/user.actions';
import { selectUserDetail } from '../../Redux/User/user.selectors';
import { createStructuredSelector } from 'reselect';
import Swal from 'sweetalert2';

const LoginPage = () => {
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        setUserCredentials({ email: '', password: '' });
        try {
            setIsSigningIn(true);
            await auth.signInWithEmailAndPassword(email, password);
            setIsSigningIn(false);
        } catch (error) {
            setIsSigningIn(false);
            if (error.code === 'auth/user-not-found'){
                setEmailError('User Not Found');

            } else if (error.code === 'auth/wrong-password') {
                setPasswordError('Incorrect Password');

            } else if (error.code === 'auth/network-request-failed'){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Network Error',
                    footer: 'Check your network connection'
                });

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: 'Try Again'
                })
            }
        }
    }

    const handleChange = e => {
        const { value, name } = e.target;
        setUserCredentials({...userCredentials, [name]: value })
    }
    return (
        <div className="login">
            <Navbar />
            <div className="login__box">
                <form onSubmit={handleSubmit} className="login__form">
                    <div className="login__header">
                        <h2 className="login__heading">Sign In</h2>
                        <IoIosLogIn className="login__header--icon"/>
                    </div>
                    <div className="login__form-group">
                        <AiOutlineMail className="login__icon" />
                        <input
                            onChange={handleChange} value={email} required
                            className="login__form-input" type="text"
                            name="email" id="email" placeholder="Email"
                        />
                        <p className="login__errMsg">{emailError}</p>
                    </div>
                    <div className="login__form-group">
                        <RiLockPasswordLine className="login__icon" />
                        <input
                            onChange={handleChange} value={password} required
                            className="login__form-input" type="password"
                            name="password" id="password" placeholder="password"
                        />
                        <p className="login__errMsg">{passwordError}</p>
                    </div>
                    <div className="login__form-group" style={{textAlign: 'center'}}>
                        {isSigningIn ?
                            <input className="login__submit" type="submit" disabled={true} value="wait"/> :
                            <input className="login__submit" type="submit" value="Sign In"/>}
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    getUserDetails: id => dispatch(asyncGetUser(id))
});

const mapStateToProps = createStructuredSelector({
    userDetail: selectUserDetail
});

export default connect(mapStateToProps, mapDispatchToProps) (LoginPage);
