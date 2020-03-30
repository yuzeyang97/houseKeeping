
const mongoose = require('mongoose');

// 连接本地数据库中的housekeeping库
mongoose.connect('mongodb://localhost:27017/housekeeping');

// 每一个Schema对应MongoDB中的一个集合（collection）。Schema中定义了集合中文档（document）的格式。
const MerchantSchema = new mongoose.Schema({
  id: Number,
  firstTab: String,
  secondTab: String,
  title: String,
  data: Number,
  views: Number,
  areas: Array,
  user: String,
  phone: Number,
  address: String,
  detail: String,
  comments: Array
});
const UserSchema = new mongoose.Schema({
  user: String,
  password: String,
  nick: String,
  phone: String,
  email: String
  // status: String
});
// 用户访问的是Table库中的Users集合
const Merchant = mongoose.model('merchants', MerchantSchema);
const Users = mongoose.model('Users', UserSchema);

module.exports = {
  Merchant,
  Users
};
