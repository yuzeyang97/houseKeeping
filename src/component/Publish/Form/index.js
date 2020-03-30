import React from 'react';
import {
  Form, Input, Tooltip, Icon, Cascader, Select, Checkbox, Button, Upload
} from 'antd';
import './index.css';

const { Option } = Select;
const { TextArea } = Input;

const residences = [{
  value: 'banjia',
  label: '搬家',
  children: [{
    value: 'banjia',
    label: '搬家',
    children: [{
      value: 'gongsibanjia',
      label: '公司搬家',
    }, {
      value: 'juminbanjia',
      label: '居民搬家',
    }, {
      value: 'changtubanjia',
      label: '长途搬家',
    }, {
      value: 'banjiabanchang',
      label: '搬家搬场',
    }, {
      value: 'xiaoxingbanjia',
      label: '小型搬家',
    }, {
      value: 'gangqinbanyun',
      label: '钢琴搬运',
    }, {
      value: 'shebeibanqian',
      label: '设备搬迁',
    }, {
      value: 'kongtiaoyiji',
      label: '空调移机',
    }],
  }],
}, {
  value: 'fangxinayi',
  label: '放心阿姨',
  children: [{
    value: 'baomuyuesao',
    label: '保姆/月嫂',
    children: [{
      value: 'baomu',
      label: '保姆',
    }, {
      value: 'zhongdiangong',
      label: '钟点工',
    }, {
      value: 'yuesao',
      label: '月嫂',
    }, {
      value: 'yuyingshi',
      label: '育婴师/育儿嫂',
    }, {
      value: 'cuirushi',
      label: '催乳师',
    }, {
      value: 'yuezizhongxin',
      label: '月子中心',
    }, {
      value: 'peihu',
      label: '陪护',
    }, {
      value: 'guanjia',
      label: '管家',
    }, {
      value: 'shewaijiazheng',
      label: '涉外家政',
    }],
  }],
}];

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

    normFile = e => {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    }

    render() {
      const { getFieldDecorator } = this.props.form;

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
      const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '86',
      })(
        <Select style={{ width: 70 }}>
          <Option value="86">+86</Option>
        </Select>
      );


      return (
        <Form {...formItemLayout} onSubmit={this.handleSubmit} className="publish-form">
          <Form.Item
            label="选择类别"
          >
            {getFieldDecorator('residence', {
              initialValue: ['banjia', 'banjia', 'gongsibanjia'],
              rules: [{ type: 'array', required: true, message: '请选择类别' }],
            })(
              <Cascader options={residences} />
            )}
          </Form.Item>
          <Form.Item
            label="服务区域"
          >
            {getFieldDecorator('select-multiple', {
              rules: [
                { required: true, message: '请选择服务区域', type: 'array' },
              ],
            })(
              <Select mode="multiple" placeholder="请选择服务区域">
                <Option value="beijingquanqu">北京全区</Option>
                <Option value="haidian">海淀</Option>
                <Option value="chaoyang">朝阳</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item
            label="标题"
          >
            {getFieldDecorator('title', {
              rules: [{
                required: true, message: '请输入标题',
              }],
            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item
            label={(
              <span>
                公司/组织名称&nbsp;
                <Tooltip title="个人发布者可填写本人昵称">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            )}
          >
            {getFieldDecorator('merchantName', {
              rules: [{ required: true, message: '请输入公司/组织昵称!', whitespace: true }],
            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item
            label={(
              <span>
                联系人
              </span>
            )}
          >
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入联系人姓名!', whitespace: true }],
            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item
            label="联系电话"
          >
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: '请输入手机号码!' }, { pattern: /^1[34578]\d{9}$/, message: '请输入正确手机号!' }],
            })(
              <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            )}
          </Form.Item>
          <Form.Item
            label="商家地址"
          >
            {getFieldDecorator('address', {
              rules: [{ required: true, message: '请输入地址!' }],
            })(
              <Input style={{ width: '100%' }} />
            )}
          </Form.Item>
          <Form.Item
            label="详情描述"
          >
            {getFieldDecorator('description', {
              rules: [{ required: true, message: '请输入详情描述(不少于15字)!' }, { min: 15, message: '不少于15字' }],
            })(
              <TextArea style={{ width: '100%' }} />
            )}
          </Form.Item>
          <Form.Item
            label="上传图片"
          >
            <div className="dropbox">
              {getFieldDecorator('photos', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
              })(
                <Upload.Dragger name="files" action="/upload.do">
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                  </p>
                  <p className="ant-upload-text">可拖动照片至此区域进行上传</p>
                  <p className="ant-upload-hint">(可一次上传多张图片)</p>
                </Upload.Dragger>
              )}
            </div>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox>我已经阅读 <a href="">协议</a></Checkbox>
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">发布</Button>
          </Form.Item>
        </Form>
      );
    }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

export default WrappedRegistrationForm;
