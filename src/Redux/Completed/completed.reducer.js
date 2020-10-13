import { completedActionTypes } from './completed.types';

const INIT_STATE = {
    completed: null,
    isGettingCompleted: false,
    completedErrMSg: '',
    prevDoc: null,
    isGettingMoreCompleted: false,
    moreCompletedErrMsg: ''
}

const completedReducer = (state=INIT_STATE, action) => {
    switch(action.type) {
        case completedActionTypes.GET_COMPLETED_START:
            return {
                ...state,
                isGettingCompleted: true
            }
        case completedActionTypes.GET_COMPLETED_SUCCESS:
            return {
                ...state,
                isGettingCompleted: false,
                completed: action.payload
            }
        case completedActionTypes.GET_COMPLETED_FAILURE:
            return {
                ...state,
                isGettingCompleted: false,
                completedErrMSg: action.payload
            }
        case completedActionTypes.SET_COMPLETED_PREV_DOC:
            return {
                ...state,
                prevDoc: action.payload
            }
        case completedActionTypes.GET_MORE_COMPLETED_START:
            return {
                ...state,
                isGettingMoreCompleted: true
            }
        case completedActionTypes.GET_MORE_COMPLETED_SUCCESS:
            return {
                ...state,
                isGettingMoreCompleted: false,
                completed: [...state.completed, ...action.payload]
            }
        case completedActionTypes.GET_MORE_COMPLETED_FAILURE:
            return {
                ...state,
                isGettingMoreCompleted: false,
                moreCompletedErrMsg: action.payload
            }
        default:
            return state
    }
}

export default completedReducer;
