
import ActionTypes from '../../redux/reduxConstants/ActionTypes';

export const setBarTitle = title => ({
    type: ActionTypes.NavBarActions.SET_TITLE,
    title: title
});

export const setActiveTab = activeTab => ({
    type: ActionTypes.NavBarActions.SET_ACTIVE_TAB,
    activeTab: activeTab
});