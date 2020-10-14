import { resolvedActionTypes } from './Resolved.types';

const INIT_STATE = {
    resolved: null,
    isGettingResolved: false,
    resolvedErrMsg: '',
    prevDoc: null,
    isGettingMore: false,
    getMoreErrMsg: ''
}

const resolvedReducer = (state=INIT_STATE, action) => {
    switch(action.type) {
        case resolvedActionTypes.GET_RESOLVED_START:
            return {
                ...state,
                isGettingResolved: true
            }
        case resolvedActionTypes.GET_RESOLVED_SUCCESS:
            return {
                ...state,
                isGettingResolved: false,
                resolved: action.payload
            }
        case resolvedActionTypes.GET_RESOLVED_FAILURE:
            return {
                ...state,
                isGettingResolved: false,
                resolvedErrMsg: action.payload
            }
        case resolvedActionTypes.SET_RESOLVED_PREV_DOC:
            return {
                ...state,
                prevDoc: action.payload
            }
        case resolvedActionTypes.GET_MORE_RESOLVED_START:
            return {
                ...state,
                isGettingMore: true
            }
        case resolvedActionTypes.GET_MORE_RESOLVED_SUCCESS:
            return {
                ...state,
                isGettingMore: true,
                resolved: [...state.resolved, ...action.payload]
            }
        case resolvedActionTypes.GET_MORE_RESOLVED_FAILURE:
            return {
                ...state,
                isGettingMore: false,
                getMoreErrMsg: action.payload
            }
        default:
            return state
    }
}

export default resolvedReducer;
