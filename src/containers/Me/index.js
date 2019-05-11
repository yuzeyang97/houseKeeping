import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import { Tabs } from 'antd';
import PersonTab from '../../component/Me/Personal';
import CollectionTab from '../../component/Me/Collection';
import Release from '../../component/Me/Release';
import * as logCreator from '../../actions';
import styles from './index.scss';

const TabPane = Tabs.TabPane;
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    const token = sessionStorage.getItem('token');
    axios({
      method: 'post',
      url: '/users/getInfo',
      data: { token, id: 1 }
    }).then(e => {
      console.log(e);
      if (e.data.status == 1) {
        this.props.logCreators.getInfo(e.data.message);
      }
    });
  }

  render() {
    console.log(this.props);

    return (
      <div className={styles.tabWrapper} id="mePage">
        <Tabs defaultActiveKey="1" tabPosition="left" className={styles.tab}>
          <TabPane tab="账户资料" key="1" ><PersonTab data={this.props.user} /></TabPane>
          <TabPane tab="我的收藏" key="2" className={styles.tabPane}><CollectionTab history={this.props.history} /></TabPane>
          <TabPane tab="我的发布" key="3"><Release history={this.props.history} /></TabPane>
        </Tabs>
      </div>

    );
  }
}

export default connect(state => state, dispatch => ({
  logCreators: bindActionCreators(logCreator, dispatch),
  dispatch
}))(Home);
