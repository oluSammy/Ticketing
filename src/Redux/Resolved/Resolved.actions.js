import { resolvedActionTypes } from './Resolved.types';
import { firestore } from '../../firebase/firebase.utils';

const getResolvedStart = () => ({
    type: resolvedActionTypes.GET_RESOLVED_START
});

const getResolvedSuccess = task => ({
    type: resolvedActionTypes.GET_RESOLVED_SUCCESS,
    payload: task
});

const getResolvedFailure = errMsg => ({
    type: resolvedActionTypes.GET_RESOLVED_FAILURE,
    payload: errMsg
});

const setResolvedPrevDoc = doc => ({
    type: resolvedActionTypes.SET_RESOLVED_PREV_DOC,
    payload: doc
});

const getMoreResolvedStart = () => ({
    type: resolvedActionTypes.GET_MORE_RESOLVED_START
});

const getMoreResolvedSuccess = task => ({
    type: resolvedActionTypes.GET_MORE_RESOLVED_SUCCESS,
    payload: task
});

const getMoreResolvedFailure = errMsg => ({
    type: resolvedActionTypes.GET_MORE_RESOLVED_FAILURE,
    payload: errMsg
});

export const asyncGetResolved = () => {
    return dispatch => {
        try {
            dispatch(getResolvedStart());
            const ticketRef = firestore.collection('tickets').where('resolved', '==', true).orderBy('completedOn', 'desc')
            .limit(20);
            ticketRef.onSnapshot(docSnapshot => {
                const resolved = [];
                docSnapshot.docs.forEach(task => resolved.push({ id: task.id, data: task.data() }));
                dispatch(getResolvedSuccess(resolved));
                const lastDoc = docSnapshot.docs[docSnapshot.docs.length - 1];
                dispatch(setResolvedPrevDoc(lastDoc));
            });
        } catch(errMsg) {
            dispatch(getResolvedFailure(errMsg));
        }
    }
}

export const asyncGetMoreResolved = prevDoc => {
    return dispatch => {
        try {
            dispatch(getMoreResolvedStart());
            const ticketRef = firestore.collection('tickets').where('resolved', '==', true).orderBy('completedOn', 'desc')
            .startAfter(prevDoc).limit(20);
            ticketRef.onSnapshot(docSnapshot => {
                const resolved = [];
                docSnapshot.docs.forEach(task => resolved.push({ id: task.id, data: task.data() }));
                dispatch(getMoreResolvedSuccess(resolved));
                const lastDoc = docSnapshot.docs[docSnapshot.docs.length - 1];
                dispatch(setResolvedPrevDoc(lastDoc));
            });
        } catch(errMsg) {
            dispatch(getMoreResolvedFailure(errMsg));
        }
    }
}