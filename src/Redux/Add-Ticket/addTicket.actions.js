import { addTicketActionTypes } from './addTicket.types';
import { firestore, FieldValue } from '../../firebase/firebase.utils';
import firebase from 'firebase/app';
import Swal from 'sweetalert2';

const addTicketStart = () => ({
    type: addTicketActionTypes.ADD_TICKET_START
});

const addTicketSuccess = () => ({
    type: addTicketActionTypes.ADD_TICKET_SUCCESS
});

const addTicketFailure = errMsg => ({
    type: addTicketActionTypes.ADD_TICKET_FAILURE,
    payload: errMsg
});

export const asyncAddTicket = ticket => {
    return async dispatch => {
        try {
            const { name, email, designation, assign, deadline, title, task } = ticket;
            dispatch(addTicketStart());
            const dateArray = deadline.split("-");
            const newDeadline = new Date(dateArray[0], `${ +dateArray[1] - 1}`, dateArray[2]);
            const fireStamp = new firebase.firestore.Timestamp.fromDate(newDeadline);
            const ticketRef = firestore.collection("tickets");
            const createdAt = FieldValue
            await ticketRef.add({
                senderName: name,
                senderEmail: email,
                senderDesignation: designation,
                assignedTo: assign,
                completed: false,
                deadline: fireStamp,
                title,
                task,
                resolved: false,
                assigned: true,
                createdAt
            });
            dispatch(addTicketSuccess());
            Swal.fire(
                'Done!',
                `New Task Assigned to ${assign}`,
                'success'
            )
        } catch (errMsg) {
            dispatch(addTicketFailure(errMsg))
        }
    }
}