import ActionTypes from '../reduxConstants/ActionTypes';

export const toggleNavBar = () => ({
    type: ActionTypes.AppActions.TOGGLE_NAV_BAR
});

export const setAppConstants = appConstants => ({
    type: ActionTypes.AppActions.SET_APP_CONSTANTS,
    appConstants: appConstants
});