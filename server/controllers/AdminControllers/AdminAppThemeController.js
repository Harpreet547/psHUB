var utils = require("../../utils/Utils").utils;
var ErrorCodes = require("../../utils/ErrorCodes").ErrorCodes;
var AppTheme = require('../../models/AdminModels/AppTheme').AppTheme;

class AdminAppThemeController {
    setNewTheme(reqBody, callback) {
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

        this.validateAppThemeObject(reqBody, (error, status) => {
            if(!status) {
                var response = {
                    appTheme: null,
                    error: error,
                    status: status
                };
                return callback(response);
            }

            var appThemeObj = {
                primaryColor: reqBody.primaryColor,
                secondaryColor: reqBody.secondaryColor,
                tertiaryColor: reqBody.tertiaryColor,
                fourthColor: reqBody.fourthColor,
                fifthColor: reqBody.fifthColor,
                darkColor: reqBody.darkColor,
                primaryTextColor: reqBody.primaryTextColor,
                secondaryTextColor: reqBody.secondaryTextColor,
                rowNumber: 0 //Set row number to 0 always. everytime new theme is entered we will replace existing theme by finding it using rowNumber = 0
            }
            AppTheme.saveToDB(appThemeObj, (status, err, appTheme) => {
                var response = {
                    appTheme: appTheme,
                    error: err,
                    status: status
                }
                return callback(response);
            });
        });
    }

    validateAppThemeObject(obj, callback) {
        var error = null;
        var status = true;

        if(utils.objHasProperty('primaryColor')
            && utils.objHasProperty('secondaryColor')
            && utils.objHasProperty('tertiaryColor')
            && utils.objHasProperty('fourthColor')
            && utils.objHasProperty('fifthColor')
            && utils.objHasProperty('darkColor')
            && utils.objHasProperty('primaryTextColor')
            && utils.objHasProperty('secondaryTextColor')
        ) {
            error = ErrorCodes.general.improperReqBody;
            status = false;
        }
        callback(error, status);
    }
}

var adminAppThemeController = new AdminAppThemeController();
exports.adminAppThemeController = adminAppThemeController;