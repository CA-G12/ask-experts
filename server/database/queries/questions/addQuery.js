const connection = require('../../config/connection');

const addQuestionQuery = ({
  title, category, content, userId,
}) => connection.query('INSERT INTO questions (title, category, content, user_id) VALUES ($1, $2, $3, $4) returning *', [title, category, content, userId]);

module.exports = addQuestionQuery;
