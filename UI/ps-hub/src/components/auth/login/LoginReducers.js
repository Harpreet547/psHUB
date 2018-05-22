//@flow
import ActionTypes from '../../../redux/reduxConstants/ActionTypes';
import AppConstants from '../../../utils/AppConstants';

const initialState: LoginState = {
    emailHelpText: '',
    passwordHelpText: '',
    emailValidationState: null,
    passwordValidationState: null,
    profilePicUrl: ''
}

export const LoginReducer = (state: LoginState = initialState, action: LoginActions): LoginState => {
    switch(action.type) {
        case ActionTypes.LoginActions.SET_EMAIL_HELP_TEXT:
            return { ...state, emailHelpText: action.payload };

        case ActionTypes.LoginActions.SET_EMAIL_VALIDATION_STATE:
            return { ...state, emailValidationState: action.payload };

        case ActionTypes.LoginActions.SET_PASSWORD_HELP_TEXT:
            return { ...state, passwordHelpText: action.payload };

        case ActionTypes.LoginActions.SET_PASSWORD_VALIDATION_STATE:
            return { ...state, passwordValidationState: action.payload };

        case ActionTypes.LoginActions.SET_PROFILE_PIC:
            return { ...state, profilePicUrl: action.payload }

        default:
            return state;
    }
}