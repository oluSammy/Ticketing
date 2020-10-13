import { ticketActionTypes } from './Ticket.types';
import { firestore } from '../../firebase/firebase.utils';
import firebase from 'firebase/app';

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

const assignTicketStart = () => ({
    type: ticketActionTypes.ASSIGN_TICKET_START
});

const assignTicketSuccess = () => ({
    type: ticketActionTypes.ASSIGN_TICKET_START
});

const assignTicketFailure = errMsg => ({
    type: ticketActionTypes.assignTicketFailure,
    payload: errMsg
});

export const asyncGetTicket = id => {
    return dispatch => {
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

export const asyncAssignTicket = (id, staff, deadline) => {
    return async dispatch => {
        try {
            dispatch(assignTicketStart());
            const dateArray = deadline.split("-");
            const newDeadline = new Date(dateArray[0], `${ +dateArray[1] - 1}`, dateArray[2]);
            const fireStamp = new firebase.firestore.Timestamp.fromDate(newDeadline);
            const ticketRef = firestore.collection('tickets').doc(`${id}`);
            await ticketRef.update({ assignedTo: `${staff}`, assigned: true, deadline: fireStamp });
            dispatch(assignTicketSuccess());
        } catch(errMsg) {
            dispatch(assignTicketFailure(errMsg));
        }
    }
}
