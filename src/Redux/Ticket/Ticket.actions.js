import { ticketActionTypes } from './Ticket.types';
import { firestore } from '../../firebase/firebase.utils';

const getTicketStart = () => ({
    type: ticketActionTypes.GET_TICKET_START
});

const getTicketSuccess = ticket => ({
    type: ticketActionTypes.GET_TICKET_SUCCESS,
    payload: ticket
});

const getTicketFailure = errMsg => ({
    type: ticketActionTypes.GET_TICKET_FAILURE,
    payload: errMsg
});

export const asyncGetTicket = id => {
    return async dispatch => {
        try {
            dispatch(getTicketStart());
            const ticketRef = firestore.collection('tickets').doc(`${id}`);
            ticketRef.onSnapshot(docSnapshot => {
                dispatch(getTicketSuccess(docSnapshot.data()));
            })
        } catch (errMsg) {
            dispatch(getTicketFailure(errMsg));
        }
    }
}
