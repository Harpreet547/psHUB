import ActionTypes from '../redux/reduxConstants/ActionTypes';

export const setNavBarVisibility = isVisible => ({
    type: ActionTypes.AppActions.SET_NAV_BAR_VISIBILITY,
    isVisible: isVisible
});
