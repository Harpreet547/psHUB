
declare type AuthConstantsObject = {
    appTitle: ?string,
    descLine1: ?string,
    descLine2: ?string,
    authBackground?: ?string,
    _id: string,
    __v: number
};

declare type AuthProps = {
    authConstants: AuthConstantsObject,
    history: Object,
    setAuthConstants: (setAuthConstants: AuthConstantsObject) => void
};

//AUTH ACTIONS
declare type SetAuthConstantsAction = {
    type: string,
    payload: ?AuthConstantsObject
};

declare type AuthActions = SetAuthConstantsAction;

//AUTH REDUCERS
declare type AuthState = {
    authConstants: ?AuthConstantsObject
};