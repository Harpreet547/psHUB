var express = require('express');
var userRouter = express.Router();
var authRouter = require('./AuthRouter').authRouter;
var authConstantsRouter = require('./adminRoutes/AuthConstantsRoute').authConstantsRouter;

userRouter.use('/auth', authRouter);
userRouter.use('/authConstants', authConstantsRouter);

exports.userRouter = userRouter;