//@flow
import ActionTypes from '../redux/reduxConstants/ActionTypes';

export const setNavBarVisibility = (isVisible: boolean): AppActions => ({
    type: ActionTypes.AppActions.SET_NAV_BAR_VISIBILITY,
    payload: isVisible
});
