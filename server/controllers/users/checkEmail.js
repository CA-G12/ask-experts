const { checkEmailQuery } = require('../../database/queries');
// const joi = require('');

const checkEmail = (req, res, next) => {
  const { email } = req.body;
  console.log(req.body);
  console.log('here is add user controller', email);
  checkEmailQuery(email)
    .then((data) => {
      res.json(data.rows[0] ? { message: 'Email is already exists' } : { message: 'Email is available' });
    })
    .catch((err) => next(err));
};

module.exports = checkEmail;
