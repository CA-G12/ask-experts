const express = require('express');

const questionsRouter = express.Router();
const { addQuestion, getAll, questionsDetailes } = require('../controllers');

questionsRouter.get('/questions', getAll);
questionsRouter.get('/questions/:questionId', questionsDetailes);
questionsRouter.post('/questions', addQuestion);

module.exports = questionsRouter;
