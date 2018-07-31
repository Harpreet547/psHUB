var express = require('express');
var adminAapThemeRouter = express.Router();
var adminAppThemeController = require('../../controllers/AdminControllers/AdminAppThemeController').adminAppThemeController;

adminAapThemeRouter.post('/setNewTheme', function(req, res) {
    var reqBody = req.body;
    adminAppThemeController.setNewTheme(reqBody, (response) => {
        res.send(response);
    });
});

exports.adminAapThemeRouter = adminAapThemeRouter;