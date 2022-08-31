const addUserQuery = require('./users/addQuery');
const getUserQuery = require('./users/getUserQuery');
const checkEmailQuery = require('./users/checkEmailQuery');
const checkUsernameQuery = require('./users/checkUsernameQuery');
const addAnswerQuery = require('./answers/addAnswerQuery');
const getQuestionAnswersQuery = require('./answers/getQuestionAnswersQuery');
const updateVotesQuery = require('./answers/updateVotesQuery');

module.exports = {
  addUserQuery,
  getUserQuery,
  checkEmailQuery,
  checkUsernameQuery,
  addAnswerQuery,
  getQuestionAnswersQuery,
  updateVotesQuery,
};
