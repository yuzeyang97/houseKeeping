import React from 'react';
import { Divider, Input, message } from 'antd';
import styles from './index.module.scss';

const Icon1 = require('../../../resource/img/Me/f_200.png');
const Icon2 = require('../../../resource/img/Me/e_200.png');
const Icon3 = require('../../../resource/img/Me/d_200.png');
const Icon4 = require('../../../resource/img/Me/c_200.png');
const Icon5 = require('../../../resource/img/Me/b_200.png');
const Icon6 = require('../../../resource/img/Me/a_200.png');

const IconList = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6];
export default class Person extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      currentIconIndex: 0
    };
  }
  handleIcon=index => {
    this.setState({
      currentIconIndex: index
    });
  }
  changeNick=() => {
    if (!this.nickInput.state.value || this.nickInput.state.value.length < 3) {
      message.error('请输入不少于三个字');
    }
    // this.nickInput.state.value;
  }
  changePhone=() => {
    if (!this.phoneInput.state.value || !/^1[34578]\d{9}$/.test(this.phoneInput.state.value)) {
      message.error('请正确输入手机号码');
    }
  }
  changeEmail=() => {
    if (!this.emailInput.state.value || !/^.+@.+$/.test(this.emailInput.state.value)) {
      message.error('请正确输入邮箱');
    }
  }
  render() {
    console.log(this.props.data);
    return (
      <div>
        {/* 个人头像 */}
        <h2>个人头像</h2>
        <div className={styles.userImgWrapper}>
          <div className={styles.userImgBorder}>
            <img src={IconList[this.state.currentIconIndex]} className={styles.userImg} />
            <div className={styles.upBtn}>上传头像</div>
          </div>
          <div className={styles.systemImgBox}>
            <p className={styles.systemImgText}>请选择喜欢的系统头像：</p>
            <ul>
              {IconList.map((item, index) => <img src={item} key={index} className={styles.systemImg} onClick={this.handleIcon.bind(this, index)} />)}
            </ul>
          </div>
        </div>
        <Divider />
        {/* 修改个人资料 */}
        <h2>修改个人资料</h2>
        <div>
          <pre>用户名:<Input className={styles.changeDataLi} value={this.props.data && this.props.data.user} disabled /></pre>
          <pre>昵 称:<Input className={styles.changeDataLi} placeholder={this.props.data && this.props.data.nick} maxLength={10} ref={ref => this.nickInput = ref} /><span className={styles.changeText} onClick={this.changeNick}>修改</span></pre>
          <pre>手 机:<Input className={styles.changeDataLi} placeholder={this.props.data && this.props.data.phone} ref={ref => this.phoneInput = ref}/><span className={styles.changeText} onClick={this.changePhone}>修改</span></pre>
          <pre>邮 箱:<Input className={styles.changeDataLi} placeholder={this.props.data && this.props.data.email} ref={ref => this.emailInput = ref}/><span className={styles.changeText} onClick={this.changeEmail}>修改</span></pre>
        </div>
      </div>);
  }
}
