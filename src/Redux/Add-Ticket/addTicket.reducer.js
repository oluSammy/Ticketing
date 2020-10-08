import { addTicketActionTypes } from './addTicket.types';

const INIT_STATE = {
    isAddingTicket: false,
    addTicketErrMsg: ''
}

const AddTicketReducer = (state=INIT_STATE, action) => {
    switch(action.type) {
        case addTicketActionTypes.ADD_TICKET_START:
            return {
                ...state,
                isAddingTicket: true
            }
        case addTicketActionTypes.ADD_TICKET_SUCCESS:
            return {
                ...state,
                isAddingTicket: false
            }
        case addTicketActionTypes.ADD_TICKET_FAILURE:
            return {
                ...state,
                isAddingTickets: false,
                addTicketErrMsg: action.payload
            }
        default:
            return state
    }
}

export default AddTicketReducer;