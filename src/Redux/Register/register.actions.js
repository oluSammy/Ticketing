import { registerActionTypes } from "./register.types";
import { firestore, auth } from '../../firebase/firebase.utils';
import Swal from 'sweetalert2';

const registerICTStart = () => ({
    type: registerActionTypes.REGISTER_ICT_START
});

const registerICTSuccess = () => ({
    type: registerActionTypes.REGISTER_ICT_SUCCESS
});

const registerICTFailure = errMsg => ({
    type: registerActionTypes.REGISTER_ICT_FAILURE,
    payload: errMsg
});

const registerStaffStart = () => ({
    type: registerActionTypes.REGISTER_STAFF_START
});

const registerStaffSuccess = () => ({
    type: registerActionTypes.REGISTER_STAFF_SUCCESS
});

const registerStaffFailure = errMsg => ({
    type: registerActionTypes.REGISTER_STAFF_FAILURE,
    payload: errMsg
});

export const asyncRegisterICT = staff => {
    return dispatch => {
        try {
            dispatch(registerICTStart());
            const { firstName, lastName, email, pass } = staff;
            const userRef = firestore.collection('users');
            auth.createUserWithEmailAndPassword(email, pass)
            .then(userCredential => {
                userRef.doc(`${userCredential.user.uid}`)
                .set({
                    firstName,
                    surname: lastName,
                    userRight: 'ictStaff',
                    designation: 'ICT Staff'
                });
            });
            dispatch(registerICTSuccess());
            Swal.fire(
                'Done',
                'New ICT Staff created',
                'success'
            );
        } catch(errMsg) {
            dispatch(registerICTFailure(errMsg));
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        }
    }
}

export const asyncRegisterStaff = staff => {
    return dispatch => {
        try {
            dispatch(registerStaffStart());
            const { firstName, lastName, email, password, designation } = staff;
            const userRef = firestore.collection('users');
            auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                userRef.doc(`${userCredential.user.uid}`)
                .set({
                    firstName,
                    surname: lastName,
                    designation,
                    userRight: 'staff'
                });
            });
        } catch(errMsg) {
            dispatch(registerStaffFailure(errMsg))
        }
    }
}