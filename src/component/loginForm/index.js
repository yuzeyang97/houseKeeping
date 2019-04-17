import React from 'react';
import { Input, Button, message } from 'antd';
import axios from 'axios';

import styles from './style.scss';

export default class LoginForm extends React.Component {
   state={
     user: '',
     password: ''
   }
   login=() => {
     message.config({
       top: 100,
       duration: 2,
       maxCount: 3,
     });
     if (!this.state.user || !this.state.password) { message.info('请输入完整信息'); } else {
       axios({
         method: 'post',
         url: '/port',
         data: {
           user: this.state.user,
           password: this.state.password
         }
       });
     }
   }
   render() {
     return (
       <div className={styles.loginFormWrap}>
         <Input
           placeholder="请输入账户名"
           className={styles.input}
           onChange={e => {
             this.setState({
               user: e.target.value
             });
           }}
         />
         <Input.Password
           placeholder="请输入密码"
           className={styles.input}
           onChange={e => {
             this.setState({
               password: e.target.value
             });
           }}
         />
         <Button type="primary" className={styles.formBtn} onClick={this.login}>登陆</Button>
       </div>
     );
   }
}
