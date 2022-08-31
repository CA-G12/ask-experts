const { Router } = require('express');
const {
  addAnswer, getQuestionAnswers, updateVotes,
} = require('../controllers');

const answersRouter = Router();

answersRouter.post('/question/:questionId/answers', addAnswer);
answersRouter.get('/question/:questionId/answers', getQuestionAnswers);
answersRouter.put('/question/answers/:answerId', updateVotes);

module.exports = answersRouter;
