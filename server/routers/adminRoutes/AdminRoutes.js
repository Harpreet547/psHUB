var express = require('express');
var adminRouter = express.Router();
//var authConstantsRouter = require('./AuthConstantsRoute').authConstantsRouter;
//var adminAuthRouter = require('./AdminAuthRouter').adminAuthRouter;

//adminRouter.use('/authConstants', authConstantsRouter);
//adminRouter.use('/auth', adminAuthRouter);

adminRouter.get('/check', function(req, res) {
    res.send({
        status: true
    });
});
exports.adminRouter = adminRouter;