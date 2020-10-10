import { createSelector } from 'reselect';

const selectDueTasks = state => state.overdue;

export const selectOverdueTasks = createSelector(
    [selectDueTasks],
    overdue => overdue.due
);

export const selectIsGettingDue = createSelector(
    [selectDueTasks],
    overdue => overdue.isGettingDue
);

export const selectDuePrevDoc = createSelector(
    [selectDueTasks],
    overdue => overdue.prevDoc
);