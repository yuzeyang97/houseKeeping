import React from 'react';
import { Modal, message } from 'antd';
import axios from 'axios';
import Login from './Login';
import Register from './Register';

// import styles from './style.scss';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      confirmLoading: false,
      showLogin: true
    };
  }

   handleToLogin = () => {
     this.setState({
       showLogin: true
     });
   }
   handleToRegister = () => {
     this.setState({
       showLogin: false
     });
   }
   handleClose=() => {
     this.props.handleLoginBtn && this.props.handleLoginBtn();
   }
   render() {
     const { confirmLoading, showLogin } = this.state;
     return (
       <Modal
         visible={this.props.show}
         title="登陆/注册"
         onCancel={this.handleClose}
         confirmLoading={confirmLoading}
         footer={null}
         bodyStyle={{
           display: 'flex',
           justifyContent: 'center'
         }}
       >
         {showLogin ? <Login handleToRegister={this.handleToRegister} logCreators={this.props.logCreators} handleClose={this.handleClose} /> : <Register />}

       </Modal>);
   }
}
