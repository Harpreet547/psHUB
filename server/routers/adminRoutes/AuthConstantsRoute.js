var express = require('express');
var authConstantsRouter = express.Router();

var authConstantsController = require('../../controllers/AdminControllers/AuthConstantsController').authConstantsController;

authConstantsRouter.post('/saveNewAuthConstants', function(req, res) {
    var reqBody = req.body;
    authConstantsController.saveNewDetails(reqBody, function(response) {
        res.send(response);
    });
});

authConstantsRouter.get('/getLatestAuthConstants', function(req, res) {
    authConstantsController.getLatestAuthConstants(function(response) {
        res.send(response);
    });
});

exports.authConstantsRouter = authConstantsRouter;