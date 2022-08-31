const { checkUsernameQuery } = require('../../database/queries');
// const joi = require('');

const checkUsername = (req, res, next) => {
  const { username } = req.body;
  console.log(req.body);
  console.log('here is add user controller', username);
  checkUsernameQuery(username)
    .then((data) => {
      res.json(data.rows[0] ? { message: 'Username is already exists' } : { message: 'Username is available' });
    })
    .catch((err) => next(err));
};

module.exports = checkUsername;
