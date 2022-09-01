const { addQuery } = require('../../database/queries/questions');

const addQuestion = (req, res) => {
  const {
    title, category, content, userId,
  } = req.body;

  addQuery({
    title, category, content, userId,
  })
    .then((data) => {
      res.redirect('/home');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: 'server error' });
    });
};

module.exports = addQuestion;
