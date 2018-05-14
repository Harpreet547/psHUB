import ActionTypes from '../reduxConstants/ActionTypes';

const initialState = {
    emailHelpText: '',
    passwordHelpText: '',
    emailValidationState: null,
    passwordValidationState: null,
    profilePicUrl: ''
}

export const LoginReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.LoginActions.SET_EMAIL_HELP_TEXT:
            return { ...state, emailHelpText: action.text };

        case ActionTypes.LoginActions.SET_EMAIL_VALIDATION_STATE:
            return { ...state, emailValidationState: action.validationState };

        case ActionTypes.LoginActions.SET_PASSWORD_HELP_TEXT:
            return { ...state, passwordHelpText: action.text };

        case ActionTypes.LoginActions.SET_PASSWORD_VALIDATION_STATE:
            return { ...state, passwordValidationState: action.validationState };

        case ActionTypes.LoginActions.SET_PROFILE_PIC:
            return { ...state, profilePicUrl: action.profilePicUrl }

        default:
            return state;
    }
}