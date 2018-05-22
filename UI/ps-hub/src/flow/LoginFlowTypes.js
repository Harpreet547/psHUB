
declare type LoginProps = {
    emailHelpText: ?string,
    emailValidationState: ?string,
    history: Object,
    location: Object,
    match: Object,
    passwordHelpText: ?string,
    passwordValidationState: ?string,
    profilePicUrl: ?string,
    setEmailHelpText: (text: ?string) => void,
    setEmailValidationState: (validationState: ?string) => void,
    setPasswordHelpText: (text: ?string) => void,
    setPasswordValidationState: (validationState: ?string) => void,
    setProfilePic: (profilePicUrl: ?string) => void
};

declare type loginObjType = {
    email?: ?string,
    password?: ?string
};

//LOGIN ACTION
declare type SetEmailHelpTextAction = {
    type: string,
    payload: ?string
};

declare type SetEmailValidationStateAction = {
    type: string,
    payload: ?string
};

declare type SetPasswordHelpTextAction = {
    type: string,
    payload: ?string
};

declare type SetPasswordValidationStateAction = {
    type: string,
    payload: ?string
};

declare type SetProfilePicAction = {
    type: string,
    payload: ?string
};

type LoginActions = SetEmailHelpTextAction | SetEmailValidationStateAction | SetPasswordHelpTextAction | SetPasswordValidationStateAction | SetProfilePicAction;

//LOGIN REDUCER
declare type LoginState = {
    emailHelpText: ?string,
    passwordHelpText: ?string,
    emailValidationState: ?string,
    passwordValidationState: ?string,
    profilePicUrl: ?string
};

//LOGIN CONTROLLER

declare type reqBodyCheckUserExist = {
    email: ?string
};

declare type resultUserExist = {
    emailHelpText: ?string,
    emailValidationState: ?string,
    enableSubmit: boolean,
    profilePicUrl: ?string
};