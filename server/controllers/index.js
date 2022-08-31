const addUser = require('./users/addUser');
const getUser = require('./users/getUser');
const checkEmail = require('./users/checkEmail');
const checkUsername = require('./users/checkUsername');
const addAnswer = require('./answers/addAnswer');
const getQuestionAnswers = require('./answers/getQuestionAnswers');
const updateVotes = require('./answers/updateVotes');

module.exports = {
  addUser,
  getUser,
  checkEmail,
  checkUsername,
  addAnswer,
  getQuestionAnswers,
  updateVotes,
};
