// add new answer
const connection = require('../../config/connection');

const updateVotesQuery = ({
  answerId, votes,
}) => {
  console.log(answerId, votes);
  const sql = {
    text: 'UPDATE answers SET votes = $2 WHERE id = $1 returning *;',
    values: [answerId, votes],
  };
  return connection.query(sql);
};

module.exports = updateVotesQuery;
