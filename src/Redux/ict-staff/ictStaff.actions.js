import { ictStaffActionTypes } from './ictStaff.types';
import { firestore } from '../../firebase/firebase.utils';

const getStaffStart = () => ({
    type: ictStaffActionTypes.GET_STAFF_START
});

const getStaffSuccess = staffs => ({
    type: ictStaffActionTypes.GET_STAFF_SUCCESS,
    payload: staffs
});

const getStaffFailure = errMsg => ({
    type: ictStaffActionTypes.GET_STAFF_FAILURE,
    payload: errMsg
});

export const asyncGetICTStaffs = () => {
    return async dispatch => {
        try {
            dispatch(getStaffStart());
            const staffsRef = firestore.collection('users').where('userRight', '==', 'ictStaff');
            staffsRef.onSnapshot(docSnapshot => {
                const ictStaffs = [];
                docSnapshot.docs.forEach(doc => ictStaffs.push({ id: doc.id, data: doc.data() }));
                dispatch(getStaffSuccess(ictStaffs));
            });
        } catch(errMsg) {
            dispatch(getStaffFailure(errMsg));
        }
    }
}