//@flow
import ActionTypes from '../../redux/reduxConstants/ActionTypes';

export const setAuthConstants = (authConstants: AuthConstantsObject): AuthActions => ({
    type: ActionTypes.AuthActions.SET_AUTH_CONSTANTS,
    payload: authConstants
});