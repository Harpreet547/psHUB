
const ErrorCodes = {
    general: {
        emptyReqBody: {
            errCode: 101,
            message: 'General Error: Recieved empty request body.'
        },
        improperReqBody: {
            errorCode: 102,
            message: 'General Error: Recieved request body does not involve required parameters.'
        },
        unexpected: {
            errorCode: 103,
            message: 'General Error: Server Error.'
        },
    },
    signUp: {
        passwordMismatch: {
            errorCode: 201,
            message: 'Sign Up Error: Password and verify password are not same.'
        },
        duplicateUser: {
            errorCode: 202,
            message: 'Sign Up Error: User already exist.'
        },
    },
    login: {
        userNotFound: {
            errorCode: 301,
            message: 'Login Error: User not found.'      
        },
        wrongPassword: {
            errorCode: 302,
            message: 'Login Error: Entered password is wrong.'
        }
    },
    admin: {
        AppConstants: {
            unableToGet: {
                errorCode: 411,
                message: 'AppConstants Error: Unable to get updated Constants.'
            }
        }
    }
}

exports.ErrorCodes = ErrorCodes;