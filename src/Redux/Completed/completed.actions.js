import { completedActionTypes } from './completed.types';
import { firestore } from '../../firebase/firebase.utils';

const getCompletedStart = () => ({
    type: completedActionTypes.GET_COMPLETED_START
});

const getCompletedSuccess = tasks => ({
    type: completedActionTypes.GET_COMPLETED_SUCCESS,
    payload: tasks
});

const getCompletedFailure = errMsg => ({
    type: completedActionTypes.GET_COMPLETED_FAILURE,
    payload: errMsg
});

const setCompletedPrevDoc = prevDoc => ({
    type: completedActionTypes.SET_COMPLETED_PREV_DOC,
    payload: prevDoc
});

const getMoreCompletedStart = () => ({
    type: completedActionTypes.GET_MORE_COMPLETED_START
});

const getMoreCompletedSuccess = tasks => ({
    type: completedActionTypes.GET_MORE_COMPLETED_SUCCESS,
    payload: tasks
});

const getMoreCompletedFailure = errMsg => ({
    type: completedActionTypes.GET_MORE_COMPLETED_FAILURE,
    payload: errMsg
});


export const asyncGetCompletedTasks = () => {
    return dispatch => {
        try {
            dispatch(getCompletedStart());
            const completedRef = firestore.collection('tickets').where('assigned', '==', true)
            .where('completed', '==', true).limit(2);
            completedRef.onSnapshot(docSnapshot => {
                const completedTask = [];
                docSnapshot.docs.forEach(task => completedTask.push({ id: task.id, data: task.data() }));
                dispatch(getCompletedSuccess(completedTask));
                const lastDoc = docSnapshot.docs[docSnapshot.docs.length - 1];
                dispatch(setCompletedPrevDoc(lastDoc));
            });
        } catch(errMsg) {
            dispatch(getCompletedFailure(errMsg));
        }
    }
}

export const asyncGetMoreCompletedTask = prevDoc => {
    return dispatch => {
        try {
            dispatch(getMoreCompletedStart());
            const completedRef = firestore.collection('tickets').where('assigned', '==', true)
            .where('completed', '==', true).startAfter(prevDoc).limit(2);

            completedRef.onSnapshot(docSnapshot => {
                const completedTask = [];
                docSnapshot.docs.forEach(task => completedTask.push({ id: task.id, data: task.data() }));
                dispatch(getMoreCompletedSuccess(completedTask));
                const lastDoc = docSnapshot.docs[docSnapshot.docs.length - 1];
                dispatch(setCompletedPrevDoc(lastDoc));
            });

        } catch(errMsg) {
            dispatch(getMoreCompletedFailure(errMsg));
        }
    }
}