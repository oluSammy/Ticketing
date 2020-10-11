import { createSelector } from 'reselect';

const selectDueToday = state => state.dueToday;

export const selectDue= createSelector(
    [selectDueToday],
    dueToday => dueToday.dueToday
);

export const selectIsGettingDueToday= createSelector(
    [selectDueToday],
    dueToday => dueToday.isGettingDueToday
);

export const selectDueTodayPrevDoc= createSelector(
    [selectDueToday],
    dueToday => dueToday.prevDoc
);