//@flow
import ActionTypes from '../../redux/reduxConstants/ActionTypes';
import AppConstants from '../../utils/AppConstants';

const initialState: NavBarState = {
    barTitle: AppConstants.screenTitles.main,
    activeTab: 1
};

export const NavBarElementsReducer = (state: NavBarState = initialState, action: NavBarActions): NavBarState => {
    switch(action.type) {
        case ActionTypes.NavBarActions.SET_TITLE:
            let title: string = (action.payload: any);
            return { ...state, barTitle: title };

        case ActionTypes.NavBarActions.SET_ACTIVE_TAB:
            let activeTab: number = (action.payload: any);
            return { ...state, activeTab: activeTab };    

        default:
            return state;
    }
}
