const express = require('express');

const questionsRouter = express.Router();
const { addQuestion, getAll, getQuestionDetailes } = require('../controllers');

questionsRouter.get('/questions', getAll);
questionsRouter.get('/questions/:questionId', getQuestionDetailes);
questionsRouter.post('/questions', addQuestion);

module.exports = questionsRouter;
