const { getQuestionAnswersQuery } = require('../../database/queries');
// const joi = require('');

const getQuestionAnswers = (req, res, next) => {
  const { questionId } = req.params;
  console.log('here is add user controller', questionId);
  getQuestionAnswersQuery(questionId)
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => next(err));
};

module.exports = getQuestionAnswers;
