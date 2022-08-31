const { Router } = require('express');
const {
  addUser, getUser, checkEmail, checkUsername,
} = require('../controllers');

const userRouter = Router();

userRouter.post('/signup', addUser);
userRouter.post('/check-email', checkEmail);
userRouter.post('/check-username', checkUsername);

module.exports = userRouter;
