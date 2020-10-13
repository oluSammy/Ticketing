import { ticketActionTypes } from './Ticket.types';

const INIT_STATE = {
    ticket: null,
    isGettingTicket: false,
    getTicketErrMsg: '',
    isAssigningTicket: false,
    assignErrMsg: '',
    isResolving: false,
    resolveErrMsg: ''
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
        case ticketActionTypes.ASSIGN_TICKET_START:
            return {
                ...state,
                isAssigningTicket: true,
            }
        case ticketActionTypes.ASSIGN_TICKET_SUCCESS:
            return {
                ...state,
                isAssigningTicket: false
            }
        case ticketActionTypes.ASSIGN_TICKET_FAILURE:
            return {
                ...state,
                isAssigningTicket: false,
                assignErrMsg: action.payload
            }
        case ticketActionTypes.RESOLVE_TICKET_START:
            return {
                ...state,
                isResolving: true
            }
        case ticketActionTypes.RESOLVE_TICKET_SUCCESS:
            return {
                ...state,
                isResolving: false
            }
        case ticketActionTypes.RESOLVE_TICKET_FAILURE:
            return {
                ...state,
                isResolving: false,
                resolveErrMsg: action.payload
            }
        default:
            return state;
    }
}

export default ticketReducer;
