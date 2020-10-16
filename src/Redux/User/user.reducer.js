import { userActionTypes } from './user.types';

const INIT_STATE = {
    currentUser: null,
    userDetail: null,
    isGettingUser: false,
    getUserErrMsg: '',
    sideBarIsOpen: false
}

const userReducer = (state=INIT_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case userActionTypes.GET_USER_START:
            return {
                ...state,
                isGettingUser: true
            }
        case userActionTypes.GET_USER_SUCCESS:
            return {
                ...state,
                isGettingUser: false,
                userDetail: action.payload
            }
        case userActionTypes.GET_USER_FAILURE:
            return {
                ...state,
                isGettingUser: false,
                getUserErrMsg: action.payload
            }
        case userActionTypes.TOGGLE_SIDEBAR:
            return {
                ...state,
                sideBarIsOpen: !state.sideBarIsOpen
            }
        default:
            return state
    }
}

export default userReducer;