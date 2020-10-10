import { uncompletedActionTypes } from './uncompleted.types';
import { firestore } from '../../firebase/firebase.utils';

const getUncompletedStart = () => ({
    type: uncompletedActionTypes.GET_UNCOMPLETED_START
});

const getUncompletedSuccess = tasks => ({
    type: uncompletedActionTypes.GET_UNCOMPLETED_SUCCESS,
    payload: tasks
});

const getUncompletedFailure = errorMsg => ({
    type: uncompletedActionTypes.GET_UNCOMPLETED_FAILURE,
    payload: errorMsg
});

const setPrevDoc = prevDoc => ({
    type: uncompletedActionTypes.SET_PREV_DOC,
    payload: prevDoc
});

const getMoreStart = () => ({
    type: uncompletedActionTypes.GET_MORE_UNCOMPLETED_START
});

const getMoreSuccess = tasks => ({
    type: uncompletedActionTypes.GET_MORE_UNCOMPLETED_SUCCESS,
    payload: tasks
});

const getMoreFailure = errMsg => ({
    type: uncompletedActionTypes.GET_MORE_UNCOMPLETED_FAILURE,
    payload: errMsg
})

export const asyncGetUncompleted = () => {
    return async dispatch => {
        try {
            dispatch(getUncompletedStart());
            const uncompletedRef = firestore.collection('tickets').where('completed', '==', false)
            .orderBy('deadline').limit(9);
            uncompletedRef.onSnapshot(docSnapshot => {
                const uncompletedATasks = [];
                docSnapshot.docs.forEach(doc => uncompletedATasks.push({ id: doc.id, data: doc.data() }));
                dispatch(getUncompletedSuccess(uncompletedATasks));
                const lastDoc = docSnapshot.docs[docSnapshot.docs.length - 1];
                dispatch(setPrevDoc(lastDoc));
            });
        } catch(errorMsg) {
            dispatch(getUncompletedFailure(errorMsg))
        }
    }
}

export const asyncGetMoreUncompleted = prevDoc => {
    return async dispatch => {
        try {
            dispatch(getMoreStart());
            const uncompletedRef = firestore.collection('tickets').where('completed', '==', false)
            .orderBy('deadline').startAfter(prevDoc).limit(9);
            uncompletedRef.onSnapshot(docSnapshot => {
                const uncompletedATasks = [];
                docSnapshot.docs.forEach(doc => uncompletedATasks.push({ id: doc.id, data: doc.data() }));
                dispatch(getMoreSuccess(uncompletedATasks));
                const lastDoc = docSnapshot.docs[docSnapshot.docs.length - 1]
                dispatch(setPrevDoc(lastDoc));
            });
        } catch (errMsg) {
            dispatch(getMoreFailure(errMsg))
        }
    }
}