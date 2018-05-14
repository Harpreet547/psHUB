
const ActionTypes = {
    AppActions: {
        TOGGLE_NAV_BAR: 'TOGGLE_NAV_BAR',
    },
    AuthActions: {
        SET_AUTH_CONSTANTS: 'SET_AUTH_CONSTANTS' 
    },
    NavBarActions: {
        SET_RIGHT_ELEMENT: 'SET_RIGHT_ELEMENT',
        SET_LEFT_ELEMENT: 'SET_LEFT_ELEMENT',
        SET_TITLE: 'SET_TITLE'
    },
    LoginActions: {
        SET_EMAIL_HELP_TEXT: 'SET_EMAIL_HELP_TEXT',
        SET_PASSWORD_HELP_TEXT: 'SET_PASSWORD_HELP_TEXT',
        SET_PASSWORD_VALIDATION_STATE: 'SET_PASSWORD_VALIDATION_STATE',
        SET_EMAIL_VALIDATION_STATE: 'SET_EMAIL_VALIDATION_STATE'
    }
}

export default ActionTypes;