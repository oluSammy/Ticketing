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

export const asyncGetUncompleted = () => {
    return async dispatch => {
        try {
            dispatch(getUncompletedStart());
            const uncompletedRef = firestore.collection('tickets').where('completed', '==', false)
            .orderBy('deadline', 'asc');
            uncompletedRef.onSnapshot(docSnapshot => {
                const uncompletedATasks = [];
                docSnapshot.docs.forEach(doc => uncompletedATasks.push({ id: doc.id, data: doc.data() }))
                dispatch(getUncompletedSuccess(uncompletedATasks));
                const lastDoc = docSnapshot.docs[docSnapshot.docs.length - 1].data();
                dispatch(setPrevDoc(lastDoc))
            });
        } catch(errorMsg) {
            dispatch(getUncompletedFailure(errorMsg))
        }
    }
}