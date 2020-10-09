import { createSelector } from 'reselect';

const selectUncompleted = state => state.uncompleted;

export const selectUncompletedTasks = createSelector(
    [selectUncompleted],
    uncompleted => uncompleted.uncompletedTasks
);

export const selectIsGettingUncompleted = createSelector(
    [selectUncompleted],
    uncompleted => uncompleted.isGettingUncompleted
);