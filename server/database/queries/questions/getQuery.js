const connection = require('../../config/connection');

// const getQuestionsQuery = () => connection.query('select questions.id, questions.title, questions.category, questions.date, users.username from questions join users on questions.user_id = users.id;');
const getQuestionsQuery = () => 
connection.query(`select questions.id,
 questions.title, questions.category,
  questions.date from questions`);

module.exports = getQuestionsQuery;
