import ActionTypes from '../../../redux/reduxConstants/ActionTypes';

export const setEmailHelpText = text => ({
    type: ActionTypes.LoginActions.SET_EMAIL_HELP_TEXT,
    text: text
});

export const setEmailValidationState = validationState => ({
    type: ActionTypes.LoginActions.SET_EMAIL_VALIDATION_STATE,
    validationState: validationState
});

export const setPasswordHelpText = text => ({
    type: ActionTypes.LoginActions.SET_PASSWORD_HELP_TEXT,
    text: text
});

export const setPasswordValidationState = validationState => ({
    type: ActionTypes.LoginActions.SET_PASSWORD_VALIDATION_STATE,
    validationState: validationState
});


export const setProfilePic = profilePicUrl => ({
    type: ActionTypes.LoginActions.SET_PROFILE_PIC,
    profilePicUrl: profilePicUrl
});