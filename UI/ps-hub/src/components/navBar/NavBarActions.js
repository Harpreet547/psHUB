// @flow
import ActionTypes from '../../redux/reduxConstants/ActionTypes';

export const setBarTitle = (title: string): NavBarActions => ({
    type: ActionTypes.NavBarActions.SET_TITLE,
    payload: title
});

export const setActiveTab = (activeTab: number): NavBarActions => ({
    type: ActionTypes.NavBarActions.SET_ACTIVE_TAB,
    payload: activeTab
});

