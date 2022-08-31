const { addUserQuery } = require('../../database/queries');
// const joi = require('');

const addUser = (req, res, next) => {
  const { username, password, email } = req.body;
  // console.log('here is add user controller', username, password, email);
  addUserQuery({ username, email, password })
    .then((data) => res.status(201).json({ message: 'User is added successfully', data: data.rows[0] }))
    .catch((err) => next(err));
};

module.exports = addUser;
