import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
);

export const selectIsGettingUserDetail = createSelector(
    [selectUser],
    user => user.isGettingUser
);

export const selectUserDetail = createSelector(
    [selectUser],
    user => user.userDetail
);

export const selectSidebar = createSelector(
    [selectUser],
    user => user.sideBarIsOpen
);