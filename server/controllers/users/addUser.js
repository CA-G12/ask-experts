const { addUserQuery } = require('../../database/queries');
// const joi = require('');

const addUser = (req, res) => {
  const { username, password, email } = req.body;
  console.log('here is add user controller', username, password, email);
  addUserQuery({ username, email, password })
    .then((data) => console.log('data fetched from database', data.rows[0]))
    .catch(console.log);
};

module.exports = addUser;
