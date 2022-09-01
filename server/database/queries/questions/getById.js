const connection = require('../../config/connection');

const getByIdQuery = (id) => connection.query('select users.username ,questions.title,questions.content,questions.category,questions.date from questions join users on questions.user_id=users.id where questions.id = $1;', [id]);

module.exports = getByIdQuery;
