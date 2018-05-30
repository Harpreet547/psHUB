var express = require('express');
var adminAuthRouter = express.Router();
var adminAuthController = require('../../controllers/AdminControllers/AdminAuthController').adminAuthController;
var ErrorCodes = require('../../utils/ErrorCodes').ErrorCodes;

adminAuthRouter.post('/login', function(req, res) {
    if(req.session.userID) {
        var error = ErrorCodes.login.alreadyLoggedIn;
        var response = {
            error: error,
            sessionToken: req.session.userID,
            status: false 
        };
        res.send(response);
    }else {
        
        adminAuthController.login(req.body, result => {
            var sessionToken = null;
            if(result.status) {
                req.session.userID = result.user._id;
                sessionToken = result.user._id;
            }
            var response = {
                error: result.error,
                sessionToken: sessionToken,
                status: result.status
            };
            res.send(response);
        });    
    }
});

exports.adminAuthRouter = adminAuthRouter;