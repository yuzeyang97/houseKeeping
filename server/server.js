const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.json()); // 使用body-parser
app.use(cookieParser()); // 使用cookie-parser

app.post('/port', (req, res) => {
  const { user, password } = req.body;
  if (user == 123 && password == 123) { res.send('成功'); } else {
    res.send('失败');
  }
});


app.listen(5000, () => {
  console.log('express port 5000 is going');
});
