const { getByUserIdQuery } = require('../../database/queries');

const getUserQuestions = (req, res) => {
  const id = req.params.userId;
  getByUserIdQuery(id)
    .then((data) => {
      res.json(data.rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: 'server error' });
    });
};

module.exports = getUserQuestions;
