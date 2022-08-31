// add new answer
const connection = require('../../config/connection');

const addAnswerQuery = ({
  content, votes, questionId, userId,
}) => {
  console.log(content, votes, questionId, userId);
  const sql = {
    text: 'INSERT INTO answers (content, votes, question_id, user_id) VALUES ($1, $2, $3, $4) returning *;',
    values: [content, votes, questionId, userId],
  };
  return connection.query(sql);
};

module.exports = addAnswerQuery;
