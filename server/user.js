
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
  user: String,
  password: String,
  nick: String,
  phone: String,
  email: String
  // status: String
});
// 用户访问的是Table库中的Users集合
const Users = mongoose.model('Users', UserSchema);


// 登陆
router.post('/login', (req, res) => {
  const user = req.body.user;
  const password = req.body.password;
  // const cookie = req.cookies.cookie;
  Users.find({ user, password }, (err, docs) => {
    if (docs.length > 0) {
      res.send({ status: 1, message: '登陆成功', token: JSON.parse(JSON.stringify(docs[0])).token });
    } else {
      res.send({ status: 0, message: '用户名或密码错误' });
    }
  });
});

// 注册
router.post('/register', (req, res) => {
  const user = req.body.user;
  // const cookie = req.cookies.cookie;
  Users.find({ user }, (err, docs) => {
    if (docs.length > 0) {
      res.send({ status: 0, message: '用户名重复' });
    } else {
      const token = Math.random().toString(36).substring(2);
      const newUser = new Users({ // 用户传参
        user: req.body.user,
        password: req.body.password,
        nick: req.body.nick,
        phone: req.body.phone,
        email: req.body.email,
        token
      });
      newUser.save(err => {
        const datas = err ? { isSuccess: false } : { status: 1, message: '注册成功' };
        res.send(datas);
      });
    }
  });
});

// 获取用户信息
router.post('/getInfo', (req, res) => {
  const token = req.body.token;
  Users.find({ token }, 'user nick phone email', (err, docs) => {
    if (docs.length > 0) {
      res.send({ status: 1, message: docs[0] });
    } else {
      res.send({ status: 0, message: '参数错误' });
    }
  });
});

module.exports = router;
