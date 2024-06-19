const { login, getUsers } = require('../controllers/userController');
const { checkEmail, checkPassword, signToken } = require('../middleware/login');

const userRouter = require('express').Router();

userRouter.route('/',register).post(register)

userRouter.routes('/login'.post(checkEmail, checkPassword,signToken, login))

userRouter.route('/').get(auth, role(['admin']),getUsers);

module.exports = userRouter;