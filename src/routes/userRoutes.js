const { checkEmail, checkPassword, signToken } = require('../middleware/login');

const userRouter = require('express').Router();

userRouter.route('/',register).post(register)

userRouter.routes('/login'.post(checkEmail, checkPassword,signToken, login))
module.exports = userRouter;