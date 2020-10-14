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

export const asyncRegisterICT = staff => {
    return dispatch => {
        try {
            dispatch(registerICTStart());
            const { firstName, lastName, email, pass, confirmPass } = staff;
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