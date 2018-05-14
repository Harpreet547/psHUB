
var utils = require('../utils/Utils').utils;
var ErrorCodes = require('../utils/ErrorCodes').ErrorCodes;
var User = require('../models/User').User;

class AuthController {

    login(reqBody, callback) {
        var isEmpty = utils.objIsEmpty(reqBody);
        if(isEmpty) {
            const error = ErrorCodes.general.emptyReqBody;
            const response = {
                user: null,
                error: error,
                status: false
            };
            return callback(response);
        }

        this.validateLoginObj(reqBody, function(error, isValid) {
            if(!isValid) {
                var response = {
                    user: null,
                    error: error,
                    status: isValid
                };
                return callback(response);
            }

            var loginObj = {
                email: reqBody.email,
                password: reqBody.password
            };

            User.authenticate(loginObj, function(error, user, status) {
                var response = {
                    error: error,
                    user: user,
                    status: status
                };
                return callback(response);
            });
        });

    }

    signUp(reqBody, callback) {
        var isEmpty = utils.objIsEmpty(reqBody);
        if(isEmpty) {
            const error = ErrorCodes.general.emptyReqBody;
            const response = {
                user: null,
                error: error,
                status: false
            };
            return callback(response);
        }
        
        this.validateSignUpObj(reqBody, function(error, isValid) {
            if(!isValid) {
                var response = {
                    user: null,
                    error: error,
                    status: isValid
                };
                return callback(response);
            }

            var userObj = {
                email: reqBody.email,
                password: reqBody.password
            };
            User.saveToDB(userObj, function(status, error, user) {
                var response = {
                    user: user,
                    error: error,
                    status: status
                }
                callback(response);
            });
        });

    }

    checkIfUserExist(userObj, callback) {
        User.checkIfUserExist(userObj, function(error, userExist, profilePic, status) {
            var response = {
                error: error,
                userExist: userExist,
                profilePic: profilePic,
                status: status
            }
            return callback(response);
        });
    }

    validateLoginObj(loginObj, callback) {
        var error = null;
        var status = true;
        if( !( utils.objHasProperty(loginObj, 'email') && utils.objHasProperty(loginObj, 'password') ) ) {
            error = ErrorCodes.general.improperReqBody;
            status = false;
        }
        callback(error, status);
    }
    
    validateSignUpObj(userObj, callback) {
        var error = null;
        var status = true;
        if( !( utils.objHasProperty(userObj, 'email') && utils.objHasProperty(userObj, 'password') && utils.objHasProperty(userObj, 'passwordConfirm') ) ) {
            error = ErrorCodes.general.improperReqBody;
            status = false;
        }

        if(userObj.password !== userObj.passwordConfirm) {
            error = ErrorCodes.signUp.passwordMismatch;
            status = false;
        }

        callback(error, status);
    }
}

exports.authController = new AuthController();