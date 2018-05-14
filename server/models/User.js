var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var ErrorCodes = require('../utils/ErrorCodes').ErrorCodes;


var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    username: {
        type: String,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    profilePic: {
        type: String
    }
});

UserSchema.pre('save', function(next) {
    var user = this;
    bcrypt.hash(user.password, 10, function(err, hash) {
        if(err) {
            return next(err);
        }
        user.password = hash;
        next();
    });
});

UserSchema.statics.saveToDB = function (userObj, callback) {
    User.create(userObj, function(err, user) {
        var error;
        var savedUser;
        var status = false;
        if(err) {
            if(err.code == 11000) {
                error = ErrorCodes.signUp.duplicateUser;
            }else {
                error = {
                    errorCode: err.code,
                    message: 'Unhandled Error: ' + err.errmsg 
                };
            }
            savedUser = null;
        }else {
            error = null;
            user.password = undefined;
            savedUser = user;
            status = true;
        }
        callback(status, error, savedUser);
    });
}

UserSchema.statics.authenticate = function(loginObj, callback) {
    var findByEmail = {
        email: loginObj.email
    }
    User.findOne(findByEmail).exec(function(err, user) {
        if(err) {
            console.log('Error: ' + err);
            var error = ErrorCodes.general.unexpected;
            return callback(error, null, false);
        }else if(!user) {
            var error = ErrorCodes.login.userNotFound;
            return callback(error, null, false);
        }

        bcrypt.compare(loginObj.password, user.password, function(err, result) {
            if(result === true) {
                user.password = undefined;
                return callback(null, user, true);
            }else {
                var error = ErrorCodes.login.wrongPassword;
                return callback(error, null, false);
            }
        });
    });
}

UserSchema.statics.checkIfUserExist = function(userObj, callback) {
    var findByEmail = {
        email: userObj.email
    }
    User.findOne(findByEmail).exec(function(err, user) {
        if(err) {
            console.log('Error: ' + err);
            var error = ErrorCodes.general.unexpected;
            return callback(error, false, false);
        }else if(!user) {
            return callback(null, false, true);
        }
        return callback(null, true, user.profilePic, true);
    });
}

var User = mongoose.model('User', UserSchema);
exports.User = User;



