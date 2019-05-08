import React from 'react';
import { Button, Modal, Rate } from 'antd';
import './index.css';
import TextArea from 'antd/lib/input/TextArea';

// import styles from './style.scss';

export default class ShopInfo extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  state = {
    visible: false,
    TextAreaVal: '',
    RateVal: 3.5
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    console.log(this.state);
    this.setState({
      visible: false,
      TextAreaVal: '',
      RateVal: 3.5
    });
  }

  handleCancel = () => {
    this.setState({
      visible: false,
      TextAreaVal: '',
      RateVal: 3.5
    });
  }

  handleRate=val => {
    this.setState({
      RateVal: val
    });
  }

  handleTextArea=e => {
    this.setState({
      TextAreaVal: e.target.value
    });
  }

  render() {
    return (
      <div className="shopinfo">
        <div className="shopinfo__title">
          <h2>北京小红帽捷达搬家有限公司</h2>
          <div className="shopinfo__title__tag">
            <span className="shopinfo__title__tag__members">
            会员1年
            </span>
          </div>
        </div>
        <div className="shopinfo__intro ">
          <dl>
            <dt>5个月</dt>
            <dd>加入本地服务</dd>
          </dl>
          <dl className="shopinfo__intro__last">
            <dt>1个</dt>
            <dd>发布帖子</dd>
          </dl>
        </div>
        <div className="commentBtn">
          <Button onClick={this.showModal}>评论</Button>
        </div>
        <Modal
          title="请输入您的评价"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          cancelText="取消"
          okText="确定"
        >
          <p>评论</p>
          <TextArea onChange={this.handleTextArea} value={this.state.TextAreaVal} />
          <p className="RateTitle">打星</p>
          <Rate allowHalf value={this.state.RateVal} onChange={this.handleRate} />
        </Modal>
      </div>
    );
  }
}
