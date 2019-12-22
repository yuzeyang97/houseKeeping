import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Layout, Button } from 'antd';
import { connect } from 'react-redux';
import * as logCreator from '../../actions';
import LoginForm from '../loginForm';
import styles from './style.module.scss';

const { Header } = Layout;
const homeIcon = require('../../resource/img/tabBar/home.png');


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    console.log(props);
  }
  state={
    showLoginForm: false
  }
  handleLoginBtn=() => {
    this.setState({
      showLoginForm: !this.state.showLoginForm
    });
  }
  handlePublishBtn=() => {
    const isLogin = this.props.user.isLogin || sessionStorage.getItem('token');
    if (!isLogin) {
      this.handleLoginBtn();
      return;
    }
    this.props.history.push('/publish');
  }
  render() {
    const isLogin = this.props.user.isLogin || sessionStorage.getItem('token');
    console.log(isLogin);
    return (
      <Header className={styles.header}>
        <div>
          <div className={styles.logo}>
        同城本地服务
          </div>
          <Link to="/" className={`${styles.tab} ${styles.homeLink}`}><img src={homeIcon} className={styles.homeIcon} />首页</Link>
        </div>
        <div className={styles.rightTab}>
          {isLogin ?
            <Link to="/me" className={styles.tab} >个人中心</Link> :
            <span
              className={styles.tab}
              onClick={this.handleLoginBtn}
            > 登陆/注册</span>
          }
          <Button onClick={this.handlePublishBtn}>免费发布</Button>
        </div>
        <LoginForm show={this.state.showLoginForm} handleLoginBtn={this.handleLoginBtn} logCreators={this.props.logCreators} />
      </Header>
    );
  }
}

export default connect(state => state, dispatch => ({
  logCreators: bindActionCreators(logCreator, dispatch),
  dispatch
}))(NavBar);

