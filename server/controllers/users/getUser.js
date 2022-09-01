const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { UserByLoginQuery } = require('../../database/queries');


const privateKey = '123456';

const loginValidation = Joi.object({
  username: Joi.string().required(),

  password: Joi.string().min(4).required(),
});

const getUserByLogin = (req, res, next) => {
  const { username, password } = req.body;
  const result = loginValidation.validate(
    { username, password },
  );
  if (!result.error) {

    console.log('here is get user controller', username, password);
    UserByLoginQuery({ username, password })
.then((data)=> {
  if(data.rows.length){
    if (data.rows[0].password === password) {
      res.status(200).json({
        message: 'success',
        data: data.rows[0],
      })
      const token = jwt.sign({ username, password }, privateKey);
      console.log(token);
      res.cookie('token', token).redirect('/');
    }
    else{
      res.json({
        message: 'passwords dose not match'
      })
      res.clearCookie('token').redirect ('/')
    }
  }else{
    res.json({
            message: 'you are not a signed user'
          });
           
    console.log('no data');
  }
})
      // .then((data) => {
      //   if
      //   res.status(200).json({
          
      //     message: result.error || 'success',
      //     data: data.rows[0],
      //   }).then((data)=> {
      //     if (!data) {res.json({
      //       message: 'you are not a signed user'
      //     });
      //   }
      //     else {
      //       if (data.password === password) {
      //         const token = jwt.sign({ username, password }, privateKey);
      //         console.log(token);
      //         res.cookie('token', token).redirect('/');
      //       } else{
      //         res.json({
      //           message: 'passwords dose not match'
      //         })
      //         res.clearCookie('token').redirect ('/')
      //       }
      //     }
      //   }
      //   )
      // })
      // .catch((err) => next(err));


  }
};

module.exports = getUserByLogin;
