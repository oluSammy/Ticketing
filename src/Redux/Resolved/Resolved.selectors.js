import { createSelector } from 'reselect';

const selectResolved = state => state.resolved;

export const selectIsGettingResolved  = createSelector(
    [selectResolved],
    resolved => resolved.isGettingResolved
);

export const selectResolvedTasks = createSelector(
    [selectResolved],
    resolved => resolved.resolved
);

export const selectResolvedPreviousDoc = createSelector(
    [selectResolved],
    resolved => resolved.prevDoc
);