// get answers of single question
const connection = require('../../config/connection');

const getQuestionAnswersQuery = (id) => {
  const sql = {
    text: `SELECT 
      a.content,
      a.votes,
      a.date,
      a.user_id,
      u.username
    FROM answers a INNER JOIN users u
        ON a.user_id = u.id
    WHERE a.question_id = $1`,
    values: [id],
  };
  return connection.query(sql);
};

module.exports = getQuestionAnswersQuery;
