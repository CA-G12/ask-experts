const { getQuery } = require('../../database/queries');

const getQuestions = (req, res) => {
  getQuery()
    .then((data) => {
      res.json(data.rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: 'server error' });
    });
};

module.exports = getQuestions;
