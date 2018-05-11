//import { ErrorCodes } from '../../utils/ErrorCodes';
var ErrorCodes = require('../../utils/ErrorCodes');
var mongoose = require('mongoose');

var AppConstantsSchema = new mongoose.Schema({
    appTitle: {
        type: String,
        trim: true
    },
    descLine1: {
        type: String,
        trim: true
    },
    descLine2: {
        type: String,
    },
    rowNumber: {
        type: Number
    }
});

AppConstantsSchema.pre('save', function(next) {
    var appConstants = this;
    AppConstants.findOne({})
                .sort('-rowNumber')
                .exec(function(error, appConstantsObj) {
                    if(error) {
                        next();
                    }else {
                        appConstants.rowNumber = appConstantsObj.rowNumber + 1;
                        next();
                    }
                });
                
});

AppConstantsSchema.statics.saveToDB = function (appConstantsObj, callback) {
    AppConstants.create(appConstantsObj, function(err, appConstants) {
        var error;
        var savedAppConstants;
        var status = false;
        if(err) {
            error = {
                errorCode: err.code,
                message: 'Unhandled Error: ' + err.errmsg 
            };
            
            savedAppConstants = null;
        }else {
            error = null;
            savedAppConstants = appConstants;
            status = true;
        }
        callback(status, error, savedAppConstants);
    });
}

AppConstantsSchema.statics.getLatestAppConstants = function (callback) {
    AppConstants.findOne({})
                .sort('-rowNumber')
                .exec(function(error, appConstantsObj) {
                    if(error) {
                        var err = ErrorCodes.admin.AppConstants.unableToGet;
                        callback(err, null, false);
                    }else {
                        appConstantsObj.rowNumber = undefined;
                        callback(null, appConstantsObj, true);
                    }
                });
}

var AppConstants = mongoose.model('AppConstants', AppConstantsSchema);
exports.AppConstants = AppConstants;
