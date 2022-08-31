const express = require('express');

const questionsRouter = express.Router();
const { addQuestion, getAll, getUserQuestions } = require('../controllers');

questionsRouter.get('/questions', getAll);
questionsRouter.get('/questions/:userId', getUserQuestions);
questionsRouter.post('/questions', addQuestion);

module.exports = questionsRouter;
