import { unassignedActionTypes } from './Unassigned.types';

const INIT_STATE = {
    unassigned: null,
    isGettingUnassigned: false,
    unassignedErrMsg: '',
    prevDoc: null,
    isGettingMore: false,
    getMoreErrMsg: ''
}


const unassignedReducer = (state=INIT_STATE, action) => {
    switch(action.type) {
        case unassignedActionTypes.GET_UNASSIGNED_START:
            return {
                ...state,
                isGettingUnassigned: true,
            }
        case unassignedActionTypes.GET_UNASSIGNED_SUCCESS:
            return {
                ...state,
                isGettingUnassigned: false,
                unassigned: action.payload
            }
        case unassignedActionTypes.GET_UNASSIGNED_FAILURE:
            return {
                ...state,
                isGettingUnassigned: false,
                unassignedErrMsg: action.payload
            }
        case unassignedActionTypes.SET_UNASSIGNED_PREV_DOC:
            return {
                ...state,
                prevDoc: action.payload
            }
        case unassignedActionTypes.GET_MORE_UNASSIGNED_START:
            return {
                ...state,
                isGettingMore: true
            }
        case unassignedActionTypes.GET_MORE_UNASSIGNED_SUCCESS:
            return {
                ...state,
                isGettingMore: false,
                unassigned: [...state.unassigned, ...action.payload]
            }
        case unassignedActionTypes.GET_MORE_UNASSIGNED_FAILURE:
            return {
                ...state,
                isGettingMore: false,
                getMoreErrMsg: action.payload
            }
        default: return state;
    }
}

export default unassignedReducer;