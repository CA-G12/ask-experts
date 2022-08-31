const express = require('express');

const router = express.Router();
const { addQuestion, getAll, getUserQuestions } = require('../controllers');

router.get('/questions', getAll);
router.get('/questions/:userId', getUserQuestions);
router.post('/questions', addQuestion);

module.exports = router;
