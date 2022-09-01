const path = require('path');

const signIn = (req, res) => {
    console.log('gotchaaaaa')
  res.sendFile(path.join(__dirname, '..', '..', '..', 'public', 'html', 'signin.html'));
};

module.exports = signIn;
