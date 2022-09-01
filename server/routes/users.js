const { Router } = require('express');
const {
  addUser, getUser, checkEmail, checkUsername, getUserByLogin, signUp, signIn
} = require('../controllers');

const userRouter = Router();

userRouter.post('/signup', addUser);
userRouter.get('/signup', signUp);

userRouter.post('/check-email', checkEmail);
userRouter.post('/check-username', checkUsername);
userRouter.post('/signin', getUserByLogin);
userRouter.get('/signin', signIn);

module.exports = userRouter;
