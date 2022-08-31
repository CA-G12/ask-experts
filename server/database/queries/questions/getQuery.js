const connection = require('../../config/connection');

const getQuestionsQuery = () => connection.query('select questions.id, questions.title, questions.category, questions.content, questions.date, users.username from questions join users on questions.user_id = users.id;');

module.exports = getQuestionsQuery;
