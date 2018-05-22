// @flow
import ActionTypes from '../redux/reduxConstants/ActionTypes';


const initialState: AppState = {
    navBarVisible: false,
}

export const AppReducer = (state: AppState = initialState, action: AppActions): AppState => {
    switch(action.type) {
        case ActionTypes.AppActions.SET_NAV_BAR_VISIBILITY:
            return { ...state, navBarVisible: action.payload };

        default:
            return state;
    }
}