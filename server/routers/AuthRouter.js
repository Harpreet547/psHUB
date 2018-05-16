var express = require('express');
var authRouter = express.Router();

var authController = require('../controllers/AuthController').authController;
var ErrorCodes = require('../utils/ErrorCodes').ErrorCodes;

authRouter.post('/signUp', function(req, res) {
    var reqBody = req.body;
    console.log('SignUp req: ' + JSON.stringify(req.body));
    authController.signUp(reqBody, function(response) {
        res.send(response);
    });
});

authRouter.post('/login', function(req, res) {
    
    var reqBody = req.body;
    
    if(req.session.userID) {
        var error = ErrorCodes.login.alreadyLoggedIn;
        var response = {
            error: error,
            sessionToken: req.session.userID,
            status: false 
        };
        res.send(response);
    }else {
        authController.login(reqBody, function(result) {
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

authRouter.post('/checkIfUserExist', function(req, res) {
    var reqBody = req.body;
    authController.checkIfUserExist(reqBody, function(response) {
        res.send(response);
    });
}); 

exports.authRouter = authRouter;