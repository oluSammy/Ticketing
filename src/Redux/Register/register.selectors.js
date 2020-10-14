import { createSelector } from 'reselect';

const selectRegister = state => state.register;

export const selectIsRegisteringICT = createSelector(
    [selectRegister],
    register => register.isRegisteringICT
);
