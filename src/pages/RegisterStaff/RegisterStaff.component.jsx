import React from 'react';
import './RegisterStaff.styles.scss';
import { BiUserPin } from 'react-icons/bi';

const RegisterStaff = () => {
    return (
        <div className="register-staff">
            <div className="register-staff__header">
                <h2 className="register-staff__heading">Register Staff</h2>
                <BiUserPin className="register-staff__icon" />
            </div>
            <form className="register-staff__form">
                <div className="register-staff__form-group">
                    <label htmlFor="firstName" className="register-staff__label">First Name:</label>
                    <input type="text" className="register-staff__input" id="firstName" required />
                </div>
                <div className="register-staff__form-group">
                    <label htmlFor="lastName" className="register-staff__label">Last Name:</label>
                    <input type="text" className="register-staff__input" id="lastName" required />
                </div>
                <div className="register-staff__form-group">
                    <label htmlFor="email" className="register-staff__label">Email:</label>
                    <input type="email" className="register-staff__input" id="email" required />
                </div>
                <div className="register-staff__form-group">
                    <label htmlFor="password" className="register-staff__label">Password:</label>
                    <input type="password" className="register-staff__input" id="password" required />
                </div>
                <div className="register-staff__form-group">
                    <label htmlFor="school" className="register-staff__label">School:</label>
                    <select name="" id="school"className="register-staff__input register-staff__select">
                        <option value="college" className="register-staff__option">College</option>
                        <option value="primary" className="register-staff__option">Primary</option>
                        <option value="nursery" className="register-staff__option">Nursery</option>
                        <option value="sixthform " className="register-staff__option">Sixth Form</option>
                    </select>
                </div>
                <div className="register-staff__form-group">
                    <label htmlFor="designation" className="register-staff__label">Designation:</label>
                    <input type="text" className="register-staff__input" id="designation" required />
                </div>
                <input type="submit" value="Register" className="register-staff__btn" />
            </form>

        </div>
    )
}

export default RegisterStaff
