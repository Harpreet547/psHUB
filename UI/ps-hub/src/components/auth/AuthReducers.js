import ActionTypes from '../../redux/reduxConstants/ActionTypes';

const initialState = {
    authConstants: {}
}

export const AuthReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.AuthActions.SET_AUTH_CONSTANTS:
            return { ...state, authConstants: action.authConstants };

        default:
            return state;
    }
}