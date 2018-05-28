var utils = require('../../utils/Utils').utils;
var User = require('../../models/User').User;

class AdminAuthController {

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

    validateLoginObj(loginObj, callback) {
        var error = null;
        var status = true;
        if( !( utils.objHasProperty(loginObj, 'email') && utils.objHasProperty(loginObj, 'password') ) ) {
            error = ErrorCodes.general.improperReqBody;
            status = false;
        }
        callback(error, status);
    }
}

const adminAuthController = new AdminAuthController();
exports.adminAuthController = adminAuthController;