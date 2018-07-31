//var ErrorCodes = require('../../utils/ErrorCodes');
var mongoose = require('mongoose');

var AppThemeSchema = new mongoose.Schema({
    primaryColor: {
        type: String,
        trim: true
    },
    secondaryColor: {
        type: String,
        trim: true
    },
    tertiaryColor: {
        type: String,
        trim: true
    },
    fourthColor: {
        type: String,
        trim: true
    },
    fifthColor: {
        type: String,
        trim: true
    },
    darkColor: {
        type: String,
        trim: true
    },
    primaryTextColor: {
        type: String,
        trim: true
    },
    secondaryTextColor: {
        type: String,
        trim: true
    },
    rowNumber: {
        type: Number
    }
});

AppThemeSchema.statics.saveToDB = (appThemeObj, callback) => {
    var condition = {
        rowNumber: 0
    };
    AppTheme.findOne(condition, function(err, DBappTheme) {
        if(err) {
            var error = {
                errorCode: err.code,
                message: 'Unhandled Error: ' + err.errmsg 
            };
            return callback(false, error, null);
        } else if(DBappTheme === null) {
            AppTheme.create(appThemeObj, (err, appThemeObj) => {
                var error;
                var status = false;
                var appTheme;
                if(err) {
                    error = {
                        errorCode: err.code,
                        message: 'Unhandled Error: ' + err.errmsg 
                    };
                    
                    appTheme = null;
                }else {
                    error = null;
                    appTheme = appThemeObj;
                    appTheme._id = undefined;
                    appTheme.__v = undefined;
                    appTheme.rowNumber = undefined;
                    status = true;
                }
                return callback(status, error, appTheme);
            });
        } else {
            DBappTheme.primaryColor = appThemeObj.primaryColor;
            DBappTheme.secondaryColor = appThemeObj.secondaryColor;
            DBappTheme.tertiaryColor = appThemeObj.tertiaryColor;
            DBappTheme.fourthColor = appThemeObj.fourthColor;
            DBappTheme.fifthColor = appThemeObj.fifthColor;
            DBappTheme.darkColor = appThemeObj.darkColor;
            DBappTheme.primaryTextColor = appThemeObj.primaryTextColor;
            DBappTheme.secondaryTextColor = appThemeObj.secondaryTextColor;
            DBappTheme.rowNumber = appThemeObj.rowNumber;
            
            DBappTheme.save();

            var appTheme = DBappTheme;
            appTheme.rowNumber = undefined;
            appTheme.__v = undefined;
            appTheme._id = undefined;
            callback(true, null, appTheme);
        }
    });
    
}

var AppTheme = mongoose.model('AppTheme', AppThemeSchema);
exports.AppTheme = AppTheme