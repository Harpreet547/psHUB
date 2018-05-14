//import { ErrorCodes } from '../../utils/ErrorCodes';
var ErrorCodes = require('../../utils/ErrorCodes');
var mongoose = require('mongoose');

var AuthConstantsSchema = new mongoose.Schema({
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
    },
    authBackground: {
        type: String
    }
});

AuthConstantsSchema.pre('save', function(next) {
    var appConstants = this;
    AuthConstants.findOne({})
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

AuthConstantsSchema.statics.saveToDB = function (authConstantsObj, callback) {
    AuthConstants.create(authConstantsObj, function(err, authConstants) {
        var error;
        var savedAuthConstants;
        var status = false;
        if(err) {
            error = {
                errorCode: err.code,
                message: 'Unhandled Error: ' + err.errmsg 
            };
            
            savedAuthConstants = null;
        }else {
            error = null;
            savedAuthConstants = authConstants;
            status = true;
        }
        callback(status, error, savedAuthConstants);
    });
}

AuthConstantsSchema.statics.getLatestAuthConstants = function (callback) {
    AuthConstants.findOne({})
                .sort('-rowNumber')
                .exec(function(error, authConstantsObj) {
                    if(error) {
                        var err = ErrorCodes.admin.AuthConstants.unableToGet;
                        callback(err, null, false);
                    }else {
                        authConstantsObj.rowNumber = undefined;
                        callback(null, authConstantsObj, true);
                    }
                });
}

var AuthConstants = mongoose.model('AuthConstants', AuthConstantsSchema);
exports.AuthConstants = AuthConstants;
