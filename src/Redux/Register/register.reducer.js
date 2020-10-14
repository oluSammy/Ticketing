import { registerActionTypes } from './register.types';

const INIT_STATE = {
    isRegisteringICT: false,
    registerICTErrMsg: ''
}

const registerReducer = (state=INIT_STATE, action) => {
    switch(action.type) {
        case registerActionTypes.REGISTER_ICT_START:
            return {
                isRegisteringICT: true
            }
        case registerActionTypes.REGISTER_ICT_SUCCESS:
            return {
                isRegisteringICT: false
            }
        case registerActionTypes.REGISTER_ICT_FAILURE:
            return {
                isRegisteringICT: false,
                registerICTErrMsg: action.payload
            }
        default:
            return state;
    }
}

export default registerReducer;
