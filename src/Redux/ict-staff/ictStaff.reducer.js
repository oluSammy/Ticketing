import { ictStaffActionTypes } from './ictStaff.types';

const INIT_STATE = {
    staffs: null,
    isGettingStaffs: false,
    getStaffErrMsg: ''
};

export const ictReducer = (state=INIT_STATE, action) => {
    switch(action.type) {
        case ictStaffActionTypes.GET_STAFF_START:
            return {
                ...state,
                isGettingStaffs: true,
            }
        case ictStaffActionTypes.GET_STAFF_SUCCESS:
            return {
                ...state,
                isGettingStaffs: false,
                staffs: action.payload
            }
        case ictStaffActionTypes.GET_STAFF_FAILURE:
            return {
                ...state,
                isGettingStaffs: false,
                getStaffErrMsg: action.payload
            }
        default:
            return state
    }
}

export default ictReducer;