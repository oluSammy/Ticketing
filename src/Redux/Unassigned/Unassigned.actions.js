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

const setUnassignedPrevDoc = prevDoc => ({
    type: unassignedActionTypes.SET_UNASSIGNED_PREV_DOC,
    payload: prevDoc
});

const getMoreUnassignedStart = () => ({
    type: unassignedActionTypes.GET_MORE_UNASSIGNED_START
});

const getMoreUnassignedSuccess = tasks => ({
    type: unassignedActionTypes.GET_MORE_UNASSIGNED_SUCCESS,
    payload: tasks
});

const getMoreUnassignedFailure = errMsg => ({
    type: unassignedActionTypes.GET_MORE_UNASSIGNED_FAILURE,
    payload: errMsg
})

export const asyncGetUnassigned = () => {
    return dispatch => {
        try {
            dispatch(getUnassignedStart());
            const unassignedRef = firestore.collection('tickets').where('assigned', '==', false)
            .orderBy('createdAt', 'desc').limit(10);
            unassignedRef.onSnapshot(docSnapshot => {
                const UnassignedTasks = [];
                docSnapshot.docs.forEach(doc => UnassignedTasks.push({ id: doc.id, data: doc.data() }));
                dispatch(getUnassignedSuccess(UnassignedTasks));
                const lastDoc = docSnapshot.docs[docSnapshot.docs.length - 1];
                dispatch(setUnassignedPrevDoc(lastDoc));
            });
        } catch(errMsg) {
            dispatch(getUnassignedFailure(errMsg));
        }
    }
}

export const asyncGetMoreUnassigned = prevDoc => {
    return async dispatch => {
        try {
            dispatch(getMoreUnassignedStart());
            const unassignedRef = firestore.collection('tickets').where('assigned', '==', false)
            .orderBy('deadline', 'desc').startAfter(prevDoc).limit(10);
            unassignedRef.onSnapshot(docSnapshot => {
                const tasks = [];
                docSnapshot.docs.forEach(task => tasks.push({ id: task.id, data: task.data() }));
                dispatch(getMoreUnassignedSuccess(tasks));
                const lastDoc = docSnapshot.docs[docSnapshot.docs.length - 1];
                dispatch(setUnassignedPrevDoc(lastDoc));
            });
        } catch (errMsg) {
            dispatch(getMoreUnassignedFailure(errMsg));
        }
    }
}