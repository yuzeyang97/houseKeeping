import React from 'react';
import {
  Form, Icon, Input, Button, Checkbox, message
} from 'antd';
import axios from 'axios';
import styles from './style.scss';

message.config({
  top: 100,
  duration: 2,
  maxCount: 3,
});

class NormalLoginForm extends React.Component {
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          axios({
            method: 'post',
            url: '/login',
            data: values
          }).then(e => {
            if (e.data && e.data.status == 1) {
              this.props.logCreators.login(e.data.token);
              sessionStorage.setItem('token', e.data.token);
              message.info('登陆成功');
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            } else {
              message.info('用户名或密码错误');
            }
          });
        }
      });
    }

    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
          <Form.Item>
            {getFieldDecorator('user', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a href="javascript:void(0);" className={styles.register} onClick={this.props.handleToRegister}>register now!</a>
            <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
              Log in
            </Button>
          </Form.Item>
        </Form>
      );
    }
}

export default Form.create({ name: 'normal_login' })(NormalLoginForm);

