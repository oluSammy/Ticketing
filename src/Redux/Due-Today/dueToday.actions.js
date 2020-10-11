import { dueTodayActionTypes } from './dueToday.types';
import { firestore } from '../../firebase/firebase.utils';

const getDueTodayStart = () => ({
    type: dueTodayActionTypes.GET_DUE_TODAY_START
});

const getDueTodaySuccess = task => ({
    type: dueTodayActionTypes.GET_DUE_TODAY_SUCCESS,
    payload: task
});

const getDueTodayFailure = errMsg => ({
    type: dueTodayActionTypes.GET_DUE_TODAY_FAILURE,
    payload: errMsg
});

const setPrevDoc = prevDoc => ({
    type: dueTodayActionTypes.SET_PREV_DOC,
    payload: prevDoc
});

const getMoreDueStart = () => ({
    type: dueTodayActionTypes.GET_DUE_MORE_START
});

const getMoreDueSuccess = tasks => ({
    type: dueTodayActionTypes.GET_DUE_MORE_SUCCESS,
    payload: tasks
});

const getMoreDueFailure = errMsg => ({
    type: dueTodayActionTypes.GET_DUE_TODAY_FAILURE,
    payload: errMsg
});

export const asyncGetDueToday = () => {
    return async dispatch => {
        try {
            dispatch(getDueTodayStart());
            const startOfDay = new Date();
            startOfDay.setHours(0, 0, 0, 0);
            const ticketRef = firestore.collection('tickets').where('deadline', '==', startOfDay)
            .orderBy('createdAt', 'desc').limit(20);
            ticketRef.onSnapshot(docSnapshot => {
                let tasks = [];
                docSnapshot.forEach(doc => {
                    tasks.push({ id: doc.id, data: doc.data() })
                });
                const lastDoc = docSnapshot.docs[docSnapshot.docs.length - 1]
                dispatch(getDueTodaySuccess(tasks));
                dispatch(setPrevDoc(lastDoc));
            });
        } catch (errMsg) {
            dispatch(getDueTodayFailure(errMsg));
        }
    }
}

export const asyncGetMorDueToday = prevDoc => {
    return async dispatch => {
        try {
            dispatch(getMoreDueStart());
            const startOfDay = new Date();
            startOfDay.setHours(0, 0, 0, 0);
            const ticketRef = firestore.collection('tickets').where('deadline', '==', startOfDay)
            .orderBy('createdAt', 'desc').startAfter(prevDoc).limit(20);
            ticketRef.onSnapshot(docSnapshot => {
                let tasks = [];
                docSnapshot.forEach(doc => {
                    tasks.push({ id: doc.id, data: doc.data() })
                });
                const lastDoc = docSnapshot.docs[docSnapshot.docs.length - 1]
                dispatch(getMoreDueSuccess(tasks));
                dispatch(setPrevDoc(lastDoc));
            });
        } catch(errMsg) {
            dispatch(getMoreDueFailure(errMsg));
        }
    }
}