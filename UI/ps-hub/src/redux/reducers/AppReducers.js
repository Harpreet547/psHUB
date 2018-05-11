import ActionTypes from '../reduxConstants/ActionTypes';

const initialState = {
    navBarVisible: false,
    appConstants: {}
}

export const AppReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.AppActions.TOGGLE_NAV_BAR:
            return { ...state, navBarVisible: !state.navBarVisible };

        case ActionTypes.AppActions.SET_APP_CONSTANTS:
            return { ...state, appConstants: action.appConstants };

        default:
            return initialState;
    }
}