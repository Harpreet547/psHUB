import ActionTypes from '../redux/reduxConstants/ActionTypes';

const initialState = {
    navBarVisible: false,
}

export const AppReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.AppActions.SET_NAV_BAR_VISIBILITY:
            return { ...state, navBarVisible: action.isVisible };

        default:
            return state;
    }
}