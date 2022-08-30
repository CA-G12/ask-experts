// add new user
const connection = require('../../config/connection');

const addUser = ({ username, email, password }) => {
  const sql = {
    text: 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) returning *;',
    values: [username, email, password],
  };
  return connection.query(sql);
};

module.exports = addUser;
