import { unassignedActionTypes } from './Unassigned.types';
import { firestore } from '../../firebase/firebase.utils';

const getUnassignedStart = () => ({
    type: unassignedActionTypes.GET_UNASSIGNED_START
});

const getUnassignedSuccess = tasks => ({
    type: unassignedActionTypes.GET_UNASSIGNED_SUCCESS,
    payload: tasks
});

const getUnassignedFailure = errMsg => ({
    type: unassignedActionTypes.GET_UNASSIGNED_FAILURE,
    payload: errMsg
});

const setPrevDoc = prevDoc => ({
    type: unassignedActionTypes.SET_PREV_DOC,
    payload: prevDoc
});

export const asyncGetUnassigned = () => {
    return async dispatch => {
        try {
            dispatch(getUnassignedStart());
            const unassignedRef = firestore.collection('tickets').where('assigned', '==', false)
            .orderBy('deadline', 'desc').limit(2);
            unassignedRef.onSnapshot(docSnapshot => {
                const UnassignedTasks = [];
                docSnapshot.forEach(doc => UnassignedTasks.push({ id: doc.id, data: doc.data() }));
                dispatch(getUnassignedSuccess(UnassignedTasks));
                const lastDoc = docSnapshot.docs[docSnapshot.docs.length - 1];
                dispatch(setPrevDoc(lastDoc));
            });
        } catch(errMsg) {
            dispatch(getUnassignedFailure(errMsg));
        }
    }
}