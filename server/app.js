require('env2')('.env');
const { join } = require('path');
const express = require('express');
// const compression = require('compression');
const { env } = require('process');
const { userRouter, answersRouter, questionsRouter } = require('./routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(compression());

app.set('PORT', env.PORT || 3000);
app.use(express.static(join(__dirname, '..', 'public')));

app.use('/home', (req, res) => {
  console.log('here is home')
  res.sendFile(join(__dirname, '..', 'public', 'html', 'home.html'));
});

app.use('/detailes', (req, res) => {
  console.log('here is detailes')
  res.sendFile(join(__dirname, '..', 'public', 'html', 'detailes.html'));
});

app.use(userRouter, answersRouter, questionsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'page not found' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: 'Internal Server Error', error: err.stack });
});

module.exports = app;
