const { Router } = require('express');
const {
  addUser, getUser, checkEmail, checkUsername, getUserByLogin,
} = require('../controllers');

const userRouter = Router();

userRouter.post('/signup', addUser);
userRouter.post('/check-email', checkEmail);
userRouter.post('/check-username', checkUsername);
userRouter.post('/loginss', getUserByLogin);

module.exports = userRouter;
