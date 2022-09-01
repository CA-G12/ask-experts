const path = require('path');

const signUp = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', '..', 'public', 'html', 'signup.html'));
};

module.exports = signUp;
