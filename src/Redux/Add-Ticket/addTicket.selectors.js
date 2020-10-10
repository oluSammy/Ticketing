import { createSelector } from 'reselect';

export const selectAddTickets = state => state.addTicket;

export const selectIsAddingTicket = createSelector(
    [selectAddTickets],
    addTicket => addTicket.isAddingTicket
);