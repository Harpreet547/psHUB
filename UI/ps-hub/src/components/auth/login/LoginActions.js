import ActionTypes from '../../../redux/reduxConstants/ActionTypes';
import AppConstants from '../../../utils/AppConstants';


export const setEmailHelpText = (text: ?string): LoginActions => ({
    type: ActionTypes.LoginActions.SET_EMAIL_HELP_TEXT,
    payload: text
});

export const setEmailValidationState = (validationState: ?AppConstants.formConstants.validationStates): LoginActions => ({
    type: ActionTypes.LoginActions.SET_EMAIL_VALIDATION_STATE,
    payload: validationState
});

export const setPasswordHelpText = (text: ?string): LoginActions => ({
    type: ActionTypes.LoginActions.SET_PASSWORD_HELP_TEXT,
    text
});

export const setPasswordValidationState = (validationState: ?AppConstants.formConstants.validationStates): LoginActions => ({
    type: ActionTypes.LoginActions.SET_PASSWORD_VALIDATION_STATE,
    payload: validationState
});


export const setProfilePic = (profilePicUrl: ?string): LoginActions => ({
    type: ActionTypes.LoginActions.SET_PROFILE_PIC,
    payload: profilePicUrl
});