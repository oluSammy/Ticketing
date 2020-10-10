import { createSelector } from 'reselect';

export const selectTickets = state => state.ticket;

export const selectIsGettingTicket = createSelector(
    [selectTickets],
    ticket => ticket.isGettingTicket
);

export const selectCurrentTicket = createSelector(
    [selectTickets],
    ticket => ticket.ticket
);