const { addAnswerQuery } = require('../../database/queries');
// const joi = require('');

const addAnswer = (req, res, next) => {
  const {
    content, votes, userId,
  } = req.body;
  const { questionId } = req.params;

  addAnswerQuery({
    content, votes, questionId, userId,
  })
    .then((data) => res.status(201).json({ message: 'Answer is added successfully', data: data.rows[0] }))
    .catch((err) => next(err));
};

module.exports = addAnswer;
