declare type userExistResponseType = {
    error: ?ErrorCodesType,
    userExist: boolean,
    profilePic: ?string,
    status: boolean
};

declare type authConstantsResponseType = {
    authConstants: ?AuthConstantsObject,
    error: ?ErrorCodesType,
    status: boolean
}