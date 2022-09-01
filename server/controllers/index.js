const addUser = require('./users/addUser');
const getUser = require('./users/getUser');
const checkEmail = require('./users/checkEmail');
const checkUsername = require('./users/checkUsername');
const getUserByLogin = require('./users/getUser');
const addAnswer = require('./answers/addAnswer');
const getQuestionAnswers = require('./answers/getQuestionAnswers');
const updateVotes = require('./answers/updateVotes');
const { addQuestion, getAll, getQuestionDetailes } = require('./questions');
const signUp = require('./users/signUp');
const signIn = require('./users/signIn');

module.exports = {
  addUser,
  getUserByLogin,
  checkEmail,
  checkUsername,
  addAnswer,
  getQuestionAnswers,
  updateVotes,
  addQuestion,
  getAll,
  getQuestionDetailes,
  signUp,
  signIn,
  getUserQuestions,
};
