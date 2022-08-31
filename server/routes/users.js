const { Router } = require('express');
const { addUser } = require('../controllers');

const router = Router();

router.post('/signup', addUser);

module.exports = router;
