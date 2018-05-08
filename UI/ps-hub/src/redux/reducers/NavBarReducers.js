import ActionTypes from '../reduxConstants/ActionTypes';
import NavBarElementConstants from '../reduxConstants/NavBarElementConstants';
import AppConstants from '../../utils/AppConstants';

const initialState = {
    rightElement: NavBarElementConstants.rightElements.RightTabs,
    leftElement: NavBarElementConstants.leftElements.Empty,
    barTitle: AppConstants.screenTitles.main
}

export const NavBarElementsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.NavBarActions.SET_RIGHT_ELEMENT:
            return { ...state, rightElement: action.element };

        case ActionTypes.NavBarActions.SET_LEFT_ELEMENT:
            return { ...state, leftElement: action.element };

        case ActionTypes.NavBarActions.SET_TITLE:
            return { ...state, barTitle: action.title }

        default:
            return state;
    }
}
