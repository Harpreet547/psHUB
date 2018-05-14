import ActionTypes from '../reduxConstants/ActionTypes';

const initialState = {
    navBarVisible: false,
}

export const AppReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.AppActions.TOGGLE_NAV_BAR:
            return { ...state, navBarVisible: !state.navBarVisible };

        default:
            return state;
    }
}