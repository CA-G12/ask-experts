const app = require('./app');

const port = app.get('PORT');
app.listen(port, () => {
  console.log(`Start Listening at http://localhost:${port}`);
});
