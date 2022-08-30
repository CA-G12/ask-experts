const { addUserQuery } = require('../../database/queries');

const addUser = (req, res) => { 
  const {username, password, email } = req.body;
  console.log(username, password, email);
  addUserQuery({username, email, password})
    .then(data => console.log(data))
    .catch(console.log);
}

module.exports = addUser;