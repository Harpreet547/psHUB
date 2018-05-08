var express = require('express');
var authRouter = express.Router();

var authController = require('../controllers/AuthController').authController;

authRouter.post('/signUp', function(req, res) {
    var reqBody = req.body;
    console.log('SignUp req: ' + JSON.stringify(req.body));
    authController.signUp(reqBody, function(response) {
        res.send(response);
    });
});

authRouter.post('/login', function(req, res) {
    var reqBody = req.body;
    authController.login(reqBody, function(response) {
        res.send(response);
    });
});

exports.authRouter = authRouter;