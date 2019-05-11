const express = require('express');

const users = require('./user');
const merchant = require('./merchant');

const app = express();

app.use('/users', users);
app.use('/merchant', merchant);

app.listen(5000, () => {
  console.log('express port 5000 is going');
});
