import { createSelector } from 'reselect';

const completed = state => state.completed;

export const selectCompletedTasks = createSelector(
    [completed],
    completed => completed.completed
);

export const selectIsGettingCompleted = createSelector(
    [completed],
    completed => completed.isGettingCompleted
);

export const selectCompletedPrevDoc = createSelector(
    [completed],
    completed => completed.prevDoc
);