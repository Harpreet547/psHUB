//@flow
import ActionTypes from '../../redux/reduxConstants/ActionTypes';


const initialState: AuthState = {
    authConstants: {
        appTitle: '',
        descLine1: '',
        descLine2: '',
        authBackground: '',
        _id: '',
        __v: 0
    }
}

//Action can be of any type as all reducers will be combined in root reducer.
//But still we will be using AuthActions here as flow is compile time only 
//and during development we only wanna use variables available in AuthActions
export const AuthReducer = (state: AuthState = initialState, action: AuthActions): AuthState => {
    switch(action.type) {
        case ActionTypes.AuthActions.SET_AUTH_CONSTANTS:
            return { ...state, authConstants: action.payload };

        default:
            return state;
    }
}