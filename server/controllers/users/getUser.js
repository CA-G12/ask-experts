const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { UserByLoginQuery } = require('../../database/queries');

const privateKey = '123456';

const loginValidation = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().min(1).required(),
});

const getUserByLogin = (req, res, next) => {
  const { username, password } = req.body;
  console.log('Here is the sign in controller!', username, password);
  const result = loginValidation.validate(
    { username, password },
  );
  if (!result.error) {
    UserByLoginQuery({ username, password })
      .then((data) => {
        if (data.rows.length) {
          if (data.rows[0].password === password) {
            const token = jwt.sign({ username, password }, privateKey);
            res.cookie('token', token).status(200).json({
              message: 'success',

              redirect: '/home',
            });
          } else {
            res.json({
              err: 'Username or password is wrong !',
            });
          }
        } else {
          res.json({
            err: 'you are not a signed user',
          });

          console.log('no data');
        }
      })

      .catch((err) => res.send(err));
  }
};

module.exports = getUserByLogin;
