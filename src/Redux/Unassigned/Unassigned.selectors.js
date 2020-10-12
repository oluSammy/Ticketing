import { createSelector } from 'reselect';

const selectUnassigned = state => state.unassigned;

export const selectUnassignedTasks = createSelector(
    [selectUnassigned],
    unassigned => unassigned.unassigned
);

export const selectIsGettingUnassigned = createSelector(
    [selectUnassigned],
    unassigned => unassigned.isGettingUnassigned
);