import { unassignedActionTypes } from './Unassigned.types';

const INIT_STATE = {
    unassigned: null,
    isGettingUnassigned: false,
    unassignedErrMsg: '',
    prevDoc: null
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
        case unassignedActionTypes.SET_PREV_DOC:
            return {
                ...state,
                prevDoc: action.payload
            }
        default: return state;
    }
}

export default unassignedReducer;