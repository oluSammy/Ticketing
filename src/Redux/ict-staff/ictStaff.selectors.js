import { createSelector } from 'reselect';

const selectICT = state => state.ictStaffs;

export const selectIsGettingIctStaffs = createSelector(
    [selectICT],
    ictStaffs => ictStaffs.isGettingStaffs
);

export const selectIctStaffs = createSelector(
    [selectICT],
    ictStaffs => ictStaffs.staffs
);