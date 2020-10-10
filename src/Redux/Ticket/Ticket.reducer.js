import { ticketActionTypes } from './Ticket.types';

const INIT_STATE = {
    ticket: null,
    isGettingTicket: false,
    getTicketErrMsg: ''
}

const ticketReducer = (state=INIT_STATE, action) => {
    switch (action.type) {
        case ticketActionTypes.GET_TICKET_START:
            return {
                ...state,
                isGettingTicket: true
            }
        case ticketActionTypes.GET_TICKET_SUCCESS:
            return {
                ...state,
                isGettingTicket: false,
                ticket: action.payload,
            }
        case ticketActionTypes.GET_TICKET_FAILURE:
            return {
                ...state,
                isGettingTicket: false,
                getTicketErrMsg: action.payload
            }
        default:
            return state;
    }
}

export default ticketReducer;
