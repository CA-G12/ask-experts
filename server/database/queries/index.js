const addUserQuery = require('./users/addQuery');
const getUserQuery = require('./users/getUserQuery');
const checkEmailQuery = require('./users/checkEmailQuery');
const checkUsernameQuery = require('./users/checkUsernameQuery');
const UserByLoginQuery = require('./users/getByNamepass');
const addAnswerQuery = require('./answers/addAnswerQuery');
const getQuestionAnswersQuery = require('./answers/getQuestionAnswersQuery');
const updateVotesQuery = require('./answers/updateVotesQuery');
const { addQuery, getQuery, getByUserIdQuery } = require('./questions');

module.exports = {
  addUserQuery,
  getUserQuery,
  checkEmailQuery,
  checkUsernameQuery,
  addAnswerQuery,
  getQuestionAnswersQuery,
  updateVotesQuery,
  addQuery,
  getQuery,
  getByUserIdQuery,
  UserByLoginQuery,
};
