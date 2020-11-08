import { dueActionTypes } from './due.types';
import { firestore } from '../../firebase/firebase.utils';

const getDueStart = () => ({
    type: dueActionTypes.GET_DUE_START
});

const getDueSuccess = tasks => ({
    type: dueActionTypes.GET_DUE_SUCCESS,
    payload: tasks
});

const getDueFailure = errMsg => ({
    type: dueActionTypes.GET_DUE_FAILURE,
    payload: errMsg
});

const setDuePrevDoc = prevDoc => ({
    type: dueActionTypes.SET_DUE_PREV_DOC,
    payload: prevDoc
});

const getMoreDueStart = () => ({
    type: dueActionTypes.GET_MORE_DUE_START
});

const getMoreDueSuccess = tasks => ({
    type: dueActionTypes.GET_MORE_DUE_SUCCESS,
    payload: tasks
});

const getMoreDueFailure = errMsg => ({
    type: dueActionTypes.GET_MORE_DUE_FAILURE,
    payload: errMsg
})

export const asyncGetDueTasks = () => {
    return async dispatch => {
        try {
            dispatch(getDueStart());
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const dueRef = firestore.collection('tickets').where('completed', '==', false)
            .where('deadline', '<', today).orderBy('deadline', 'desc').limit(20);
            dueRef.onSnapshot(docSnapshot => {
                const dueTasks = [];
                docSnapshot.docs.forEach(doc => dueTasks.push({ id: doc.id, data: doc.data() }));
                dispatch(getDueSuccess(dueTasks));
                const lastDoc = docSnapshot.docs[docSnapshot.docs.length - 1];
                dispatch(setDuePrevDoc(lastDoc));
            });
        } catch (errMsg) {
            dispatch(getDueFailure(errMsg));
        }
    }
}

export const asyncGetMoreDueTasks = prevDoc => {
    return async dispatch => {
        try {
            dispatch(getMoreDueStart());
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const dueRef = firestore.collection('tickets').where('completed', '==', false)
            .where('deadline', '<', today).orderBy('deadline', 'desc').startAfter(prevDoc).limit(20);
            dueRef.onSnapshot(docSnapshot => {
                const dueTasks = [];
                docSnapshot.docs.forEach(doc => dueTasks.push({ id: doc.id, data: doc.data() }));
                dispatch(getMoreDueSuccess(dueTasks));
                const lastDoc = docSnapshot.docs[docSnapshot.docs.length - 1];
                dispatch(setDuePrevDoc(lastDoc));
            });
        } catch (errMsg) {
            dispatch(getMoreDueFailure(errMsg));
        }
    }
}