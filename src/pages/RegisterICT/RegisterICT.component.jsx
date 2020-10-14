import React, { useState } from 'react';
import { BiUserPin } from 'react-icons/bi';
import { connect } from 'react-redux';
import { asyncRegisterICT } from './../../Redux/Register/register.actions';
import { createStructuredSelector } from 'reselect';
import { selectIsRegisteringICT } from './../../Redux/Register/register.selectors';

const RegisterICT = ({ registerICTStaff, isRegistering }) => {
    const [staff, setStaff] = useState({ firstName: '', lastName: '', email: '', pass: '', confirmPass: '',
    passErrMsg: '',  passLengthErr: '' });

    const handleChange = e => {
        const {value, id} = e.target;
        setStaff({ ...staff, [id]: value });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        if(staff.pass.length < 5) {
            setStaff({ ...staff, passLengthErr: 'Password must be at least 6 characters' })
            return;
        };
        if(staff.confirmPass !== staff.pass) {
            setStaff({ ...staff, passErrMsg: 'Passwords do not match' });
            return;
        };
        await registerICTStaff(staff);
        setStaff({firstName: '', lastName: '', email: '', pass: '', confirmPass: '', passErrMsg: '',
        passLengthErr: ''});
    }

    return (
        <div className="register-staff">
            <div className="register-staff__header">
                <h2 className="register-staff__heading">Register Staff</h2>
                <BiUserPin className="register-staff__icon" />
            </div>
            <form onSubmit={handleSubmit} className="register-staff__form">
                <div className="register-staff__form-group">
                    <label htmlFor="firstName" className="register-staff__label">First Name:</label>
                    <input onChange={handleChange} type="text" className="register-staff__input" id="firstName" required
                    value={staff.firstName}/>
                </div>
                <div className="register-staff__form-group">
                    <label htmlFor="lastName" className="register-staff__label">Last Name:</label>
                    <input onChange={handleChange} type="text" className="register-staff__input" id="lastName" required
                    value={staff.lastName} />
                </div>
                <div className="register-staff__form-group">
                    <label htmlFor="email" className="register-staff__label">Email:</label>
                    <input onChange={handleChange} type="email" className="register-staff__input" id="email" required
                    value={staff.email} />
                </div>
                <div className="register-staff__form-group">
                    <label htmlFor="pass" className="register-staff__label">Password:</label>
                    <div>
                        <input onChange={handleChange} type="password" className="register-staff__input" id="pass" required
                        value={staff.pass} />
                        <p className="register-staff__err-msg">{staff.passLengthErr}</p>
                    </div>
                </div>
                <div className="register-staff__form-group">
                    <label htmlFor="confirmPass" className="register-staff__label">Confirm Password:</label>
                    <div>
                        <input onChange={handleChange} type="password" className="register-staff__input" id="confirmPass" required
                        value={staff.confirmPass} />
                        <p className="register-staff__err-msg">{staff.passErrMsg}</p>
                    </div>
                </div>
                <input style= {{cursor: isRegistering? 'not-allowed' : 'pointer'}} type="submit" value="Register" className="register-staff__btn" />
            </form>

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isRegistering: selectIsRegisteringICT
})

const mapDispatchToProps = dispatch => ({
    registerICTStaff: staff => dispatch(asyncRegisterICT(staff))
})

export default connect(mapStateToProps, mapDispatchToProps) (RegisterICT);
