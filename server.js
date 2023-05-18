const express = require('express');
const app = express();
// const dataRoute = require('./app.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/', dataRoute);

app.listen(8080, () => {
  console.log('Server started on port 8080');
});
