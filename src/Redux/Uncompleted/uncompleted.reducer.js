import { uncompletedActionTypes } from './uncompleted.types';

const INIT_START = {
    uncompletedTasks: null,
    isGettingUncompleted: false,
    uncompletedErrMsg: '',
    prevDoc: null,
    isGettingMoreTasks: false
}

const uncompletedReducer = (state=INIT_START, action) => {
    switch(action.type) {
        case uncompletedActionTypes.GET_UNCOMPLETED_START:
            return {
                ...state,
                isGettingUncompleted: true
            }
        case uncompletedActionTypes.GET_UNCOMPLETED_SUCCESS:
            return {
                ...state,
                isGettingUncompleted: false,
                uncompletedTasks: action.payload
            }
        case uncompletedActionTypes.GET_UNCOMPLETED_FAILURE:
            return {
                ...state,
                isGettingUncompleted: false,
                uncompletedErrMsg: action.payload
            }
        case uncompletedActionTypes.SET_PREV_DOC:
            return {
                ...state,
                prevDoc: action.payload
            }
        default:
            return state
    }
}

export default uncompletedReducer;
