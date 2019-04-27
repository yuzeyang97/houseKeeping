
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const router = express.Router();
const mongoose = require('mongoose');

// 连接本地数据库中的housekeeping库
mongoose.connect('mongodb://localhost:27017/housekeeping');

router.use(cookieParser()); // 使用cookie-parser
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// 每一个Schema对应MongoDB中的一个集合（collection）。Schema中定义了集合中文档（document）的格式。
const UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  // status: String
});
// 用户访问的是Table库中的Users集合
const Users = mongoose.model('Users', UserSchema);


// 注册

router.post('/register', (req, res) => {
  const newUser = new Users({ // 用户传参
    name: req.body.name,
    password: req.body.password,
    // status: req.body.status
  });
  const name = req.body.name;
  Users.find({ name }, (err, docs) => {
    if (docs.length > 0) {
      res.send({ isSuccess: false, message: '用户名已存在' });
    } else { // 向Users集合中保存数据
      newUser.save(err => {
        const datas = err ? { isSuccess: false } : { isSuccess: true, message: '注册成功' };
        res.send(datas);
      });
    }
  });
});

module.exports = router;
