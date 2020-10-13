import { dueTodayActionTypes } from './dueToday.types';

const INIT_STATE = {
    dueToday: null,
    isGettingDueToday: false,
    dueTodayErrMsg: '',
    prevDoc: null,
    isGettingMore: false,
    getMoreErrMsg: ''
}

const dueTodayReducer = (state=INIT_STATE, action) => {
    switch(action.type) {
        case dueTodayActionTypes.GET_DUE_TODAY_START:
            return {
                ...state,
                isGettingDueToday: true
            }
        case dueTodayActionTypes.GET_DUE_TODAY_SUCCESS:
            return {
                ...state,
                isGettingDueToday: false,
                dueToday: action.payload
            }
        case dueTodayActionTypes.GET_DUE_TODAY_FAILURE:
            return {
                ...state,
                isGettingDueToday: false,
                dueTodayErrMsg: action.payload
            }
        case dueTodayActionTypes.SET_DUE_TODAY_PREV_DOC:
            return {
                ...state,
                prevDoc: action.payload
            }
        case dueTodayActionTypes.GET_DUE_MORE_START:
            return {
                ...state,
                isGettingMore: true
            }
        case dueTodayActionTypes.GET_DUE_MORE_SUCCESS:
            return {
                ...state,
                isGettingMore: false,
                dueToday: [...state.dueToday, ...action.payload]
            }
        case dueTodayActionTypes.GET_DUE_MORE_FAILURE:
            return {
                ...state,
                isGettingMore: false,
                getMoreErrMsg: action.payload
            }
        default:
            return state
    }
}

export default dueTodayReducer;


