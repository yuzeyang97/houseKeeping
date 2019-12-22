
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongooseModales = require('../mongoose');


const router = express.Router();

// 连接本地数据库中的housekeeping库
router.use(cookieParser()); // 使用cookie-parser
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const Merchant = mongooseModales.Merchant;
const Users = mongooseModales.Users;
// 获取单个商家详细信息
router.post('/detail', (req, res) => {
  const id = Number(req.body.id);
  const token = req.body.token;
  Users.find({ token }, (err, docs) => {
    if (docs.length > 0) {
      Merchant.find({ id }, (err, docs) => {
        if (docs.length > 0) {
          res.send({ status: 1, message: docs[0] });
        } else {
          res.send({ status: 0, message: '未查询到结果' });
        }
      });
    } else {
      res.send({ status: 0, message: '用户token无效' });
    }
  });
});

module.exports = router;
