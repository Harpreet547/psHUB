import ActionTypes from '../reduxConstants/ActionTypes';
import NavBarElementConstants from '../reduxConstants/NavBarElementConstants';
import AppConstants from '../../utils/AppConstants';

const initialState = {
    barTitle: AppConstants.screenTitles.main,
    activeTab: 1
}

export const NavBarElementsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.NavBarActions.SET_TITLE:
            return { ...state, barTitle: action.title };

        case ActionTypes.NavBarActions.SET_ACTIVE_TAB:
            return { ...state, activeTab: action.activeTab };    
            break;

        default:
            return state;
    }
}
