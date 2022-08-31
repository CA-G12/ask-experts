const connection = require('../../config/connection');

const getByUserIdQuery = (id) => connection.query('select title,content,category,date from questions where user_id = $1;', [id]);

module.exports = getByUserIdQuery;
