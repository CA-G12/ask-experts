const { readFileSync } = require('fs');
const { join } = require('path');
const connection = require('./connection');

const buildDB = () => {
  const buildSql = readFileSync(join(__dirname, 'build.sql'));
  connection
    .query(buildSql)
    .then(() => console.log('build created successfully!'))
    .catch((e) => console.log('ERROR', e));
};

module.exports = buildDB;
