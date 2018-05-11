var express = require('express');
var appConstantsRouter = express.Router();

var appConstantsController = require('../../controllers/AdminControllers/AppConstantsController').appConstantsController;

appConstantsRouter.post('/saveNewAppConstants', function(req, res) {
    var reqBody = req.body;
    appConstantsController.saveNewDetails(reqBody, function(response) {
        res.send(response);
    });
});

appConstantsRouter.get('/getLatestAppConstants', function(req, res) {
    appConstantsController.getLatestAppConstants(function(response) {
        res.send(response);
    });
});

exports.appConstantsRouter = appConstantsRouter;