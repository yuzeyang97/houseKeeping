const express = require('express');

const users = require('./user');

const app = express();

app.use('/', users);

app.listen(5000, () => {
  console.log('express port 5000 is going');
});
