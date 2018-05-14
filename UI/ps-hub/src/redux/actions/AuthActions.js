import ActionTypes from '../reduxConstants/ActionTypes';


export const setAuthConstants = authConstants => ({
    type: ActionTypes.AuthActions.SET_AUTH_CONSTANTS,
    authConstants: authConstants
});