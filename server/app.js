require('env2')('.env');
const { join } = require('path');
const express = require('express');
// const compression = require('compression');
const { env } = require('process');
const router = require('./routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(compression());

app.set('PORT', env.PORT || 3000);
app.use(express.static(join(__dirname, '..', 'public')));

app.use(router);

module.exports = app;
