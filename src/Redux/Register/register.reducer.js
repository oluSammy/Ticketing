import { registerActionTypes } from './register.types';

const INIT_STATE = {
    isRegisteringICT: false,
    registerICTErrMsg: '',
    isRegisteringStaff: false,
    registerStaffErrMsg: ''
}

const registerReducer = (state=INIT_STATE, action) => {
    switch(action.type) {
        case registerActionTypes.REGISTER_ICT_START:
            return {
                ...state,
                isRegisteringICT: true
            }
        case registerActionTypes.REGISTER_ICT_SUCCESS:
            return {
                ...state,
                isRegisteringICT: false
            }
        case registerActionTypes.REGISTER_ICT_FAILURE:
            return {
                ...state,
                isRegisteringICT: false,
                registerICTErrMsg: action.payload
            }
        case registerActionTypes.REGISTER_STAFF_START:
            return {
                ...state,
                isRegisteringStaff: true
            }
        case registerActionTypes.REGISTER_STAFF_SUCCESS:
            return {
                ...state,
                isRegisteringStaff: false
            }
        case registerActionTypes.REGISTER_STAFF_FAILURE:
            return {
                ...state,
                isRegisteringStaff: false,
                registerStaffErrMsg: action.payload
            }
        default:
            return state;
    }
}

export default registerReducer;
