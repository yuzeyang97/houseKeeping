import React from 'react';
import {
  Form, Input, Tooltip, Icon, Checkbox, Button, AutoComplete,
} from 'antd';

const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends React.Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };

    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }

    handleConfirmBlur = e => {
      const value = e.target.value;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    }

    validateToNextPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    }

    handleWebsiteChange = value => {
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['@qq.com', '@163.com'].map(domain => `${value}${domain}`);
      }
      this.setState({ autoCompleteResult });
    }

    render() {
      const { getFieldDecorator } = this.props.form;
      const { autoCompleteResult } = this.state;

      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };

      const emailOptions = autoCompleteResult.map(email => (
        <AutoCompleteOption key={email}>{email}</AutoCompleteOption>
      ));

      return (
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item
            label="用户名"
          >
            {getFieldDecorator('用户名', {
              rules: [{
                required: true, message: '请输入用户名',
              }],
            })(
              <Input placeholder="请输入用户名" />
            )}
          </Form.Item>
          <Form.Item
            label="密码"
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: '请输入密码',
              }, {
                validator: this.validateToNextPassword,
              }],
            })(
              <Input type="password" placeholder="请输入密码" />
            )}
          </Form.Item>
          <Form.Item
            label="确认密码"
          >
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: '请确认密码',
              }, {
                validator: this.compareToFirstPassword,
              }],
            })(
              <Input type="password" onBlur={this.handleConfirmBlur} placeholder="请确认密码" />
            )}
          </Form.Item>
          <Form.Item
            label={(
              <span>
                昵称&nbsp;
                <Tooltip title="您想让别人怎样称呼您?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            )}
          >
            {getFieldDecorator('nickName', {
              rules: [{ required: true, message: '请输入昵称', whitespace: true }],
            })(
              <Input placeholder="请输入昵称" />
            )}
          </Form.Item>
          <Form.Item
            label="手机号"
          >
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: '请输入手机号' }],
            })(
              <Input style={{ width: '100%' }} placeholder="请输入手机号"/>
            )}
          </Form.Item>
          <Form.Item
            label="邮箱"
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: '请输入有效的邮箱',
              }, {
                required: true, message: '请输入你的邮箱',
              }]
            })(
              <AutoComplete
                dataSource={emailOptions}
                onChange={this.handleWebsiteChange}
                placeholder="请输入你的邮箱"
              >
                <Input />
              </AutoComplete>
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox>我已经阅读 <a href="">协议</a></Checkbox>
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">注册</Button>
          </Form.Item>
        </Form>
      );
    }
}

export default Form.create({ name: 'register' })(RegistrationForm);
