var express = require('express');
var adminAuthRouter = express.Router();
var adminAuthController = require('../../controllers/AdminControllers/AdminAuthController').adminAuthController;

adminAuthRouter.post('/login', function(req, res) {
    adminAuthController.login(req.body, response => {
        res.send(response);
    });    
});

exports.adminAuthRouter = adminAuthRouter;