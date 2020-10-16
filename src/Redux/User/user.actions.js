import { userActionTypes } from './user.types';
import { firestore } from '../../firebase/firebase.utils';

export const setUser = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
});

const getUserStart = () => ({
    type: userActionTypes.GET_USER_START
});

const getUserSuccess = userDetail => ({
    type: userActionTypes.GET_USER_SUCCESS,
    payload: userDetail
});

const getUserFailure = errMsg => ({
    type: userActionTypes.GET_USER_FAILURE,
    payload: errMsg
});

export const asyncGetUser = id => {
    return async dispatch => {
        try {
            dispatch(getUserStart());
            const userRef = firestore.collection('users').doc(`${id}`);
            const userDetail = await userRef.get();
            dispatch(getUserSuccess(userDetail.data()));
        } catch (error) {
            dispatch(getUserFailure());
        }
    }
}

export const toggleSideBar = () => ({
    type: userActionTypes.TOGGLE_SIDEBAR
});
