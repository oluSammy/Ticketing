import { dueActionTypes } from './due.types';

const INIT_STATE = {
    due: null,
    isGettingDue: false,
    dueErrMsg: '',
    prevDoc: null,
    isGettingMore: false,
    getMoreErrMsg: ''
}

const dueReducer = (state=INIT_STATE, action) => {
    switch (action.type) {
        case dueActionTypes.GET_DUE_START:
            return {
                ...state,
                isGettingDue: true,
            }
        case dueActionTypes.GET_DUE_SUCCESS:
            return {
                ...state,
                isGettingDue: false,
                due: action.payload
            }
        case dueActionTypes.GET_DUE_FAILURE:
            return {
                ...state,
                isGettingDue: false,
                dueErrMsg: action.payload
            }
        case dueActionTypes.SET_PREV_DOC:
            return {
                ...state,
                prevDoc: action.payload
            }
        case dueActionTypes.GET_MORE_START:
            return {
                ...state,
                isGettingMore: true
            }
        case dueActionTypes.GET_MORE_SUCCESS:
            return {
                ...state,
                isGettingMore: false,
                due: [...state.due, ...action.payload]
            }
        case dueActionTypes.GET_MORE_FAILURE:
            return {
                ...state,
                isGettingMore: false,
                getMoreErrMsg: action.payload
            }
        default:
            return state
    }
}

export default dueReducer;