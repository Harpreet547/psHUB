var utils = require('../../utils/Utils').utils;
var ErrorCodes = require('../../utils/ErrorCodes').ErrorCodes;

var AuthConstants = require('../../models/AdminModels/AuthConstants').AuthConstants;

class AuthConstantsController {
    saveNewDetails(reqBody, callback) {
        var isEmpty = utils.objIsEmpty(reqBody);
        if(isEmpty) {
            const error = ErrorCodes.general.emptyReqBody;
            const response = {
                appConstants: null,
                error: error,
                status: false
            };
            return callback(response);
        }

        this.validateAuthConstantsObj(reqBody, function(error, isValid) {
            if(!isValid) {
                var response = {
                    appConstants: null,
                    error: error,
                    status: isValid
                };
                return callback(response);
            }

            var authConstantsObj = {
                appTitle: reqBody.appTitle,
                descLine1: reqBody.descLine1,
                descLine2: reqBody.descLine2,
                authBackground: reqBody.authBackground,
                rowNumber: 0
            }

            AuthConstants.saveToDB(authConstantsObj, function(status, error, authConstants) {
                var response = {
                    error: error,
                    authConstants: authConstants,
                    status: status
                }
                return callback(response);
            });
        });
    }

    getLatestAuthConstants(callback) {
        AuthConstants.getLatestAuthConstants(function(error, authConstants, status) {
            var response = {
                error: error,
                authConstants: authConstants,
                status: status
            }
            callback(response);
        });
    }

    validateAuthConstantsObj(authConstantsObj, callback) {
        var error = null;
        var status = true;
        if( !( utils.objHasProperty(authConstantsObj, 'appTitle') && utils.objHasProperty(authConstantsObj, 'descLine1') && utils.objHasProperty(authConstantsObj, 'descLine2') && utils.objHasProperty(authConstantsObj, 'authBackground') ) ) {
            error = ErrorCodes.general.improperReqBody;
            status = false;
        }
        callback(error, status);
    }
}

exports.authConstantsController = new AuthConstantsController();