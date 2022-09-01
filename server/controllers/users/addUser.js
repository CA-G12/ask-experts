const { addUserQuery } = require('../../database/queries');
// const joi = require('');

const addUser = (req, res, next) => {
  const { username, password, email } = req.body;
  addUserQuery({ username, email, password })
    .then(() => {
      res.status(301).json({
        redirect:'/home',
      });
      
    
    
    })
    .catch((err) => next(err));
};

module.exports = addUser;
