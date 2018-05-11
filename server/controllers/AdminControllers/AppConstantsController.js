var utils = require('../../utils/Utils').utils;
var ErrorCodes = require('../../utils/Utils').ErrorCodes;

var AppConstants = require('../../models/AdminModels/AppConstants').AppConstants;

class AppConstantsController {
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

        this.validateAppConstantsObj(reqBody, function(error, isValid) {
            if(!isValid) {
                var response = {
                    appConstants: null,
                    error: error,
                    status: isValid
                };
                return callback(response);
            }

            var appConstantsObj = {
                appTitle: reqBody.appTitle,
                descLine1: reqBody.descLine1,
                descLine2: reqBody.descLine2,
                rowNumber: 0
            }

            AppConstants.saveToDB(appConstantsObj, function(status, error, appConstants) {
                var response = {
                    error: error,
                    appConstants: appConstants,
                    status: status
                }
                return callback(response);
            });
        });
    }

    getLatestAppConstants(callback) {
        AppConstants.getLatestAppConstants(function(error, appConstants, status) {
            var response = {
                error: error,
                appConstants: appConstants,
                status: status
            }
            callback(response);
        });
    }

    validateAppConstantsObj(appConstantsObj, callback) {
        var error = null;
        var status = true;
        if( !( utils.objHasProperty(appConstantsObj, 'appTitle') && utils.objHasProperty(appConstantsObj, 'descLine1') && utils.objHasProperty(appConstantsObj, 'descLine2') ) ) {
            error = ErrorCodes.general.improperReqBody;
            status = false;
        }
        callback(error, status);
    }
}

exports.appConstantsController = new AppConstantsController();