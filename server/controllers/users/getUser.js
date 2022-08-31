const { getUserQuery } = require('../../database/queries');
// const joi = require('');

const getUser = (req, res) => {
  const { id } = req.body;
  console.log('here is add user controller', id);
  getUserQuery(id)
    .then((data) => console.log('data fetched from database', data.rows[0]))
    .catch(console.log);
};

module.exports = getUser;
