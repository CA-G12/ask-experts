const jwt = require('jsonwebtoken');

const privateKey = '123456';

const authenticateToken = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    res.status(401).redirect('/');
  } else {
    jwt.verify(token, privateKey, (err, encoded) => {
      if (err) {
        res.status(401).redirect('/');
      } else {
        next();
      }
    });
  }
};

module.exports = authenticateToken;
