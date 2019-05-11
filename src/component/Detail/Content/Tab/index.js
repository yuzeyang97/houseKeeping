import React from 'react';
import { Tabs } from 'antd';
import Description from './DetailDescription';
import Comment from './Comment';
import Address from './Address';
import styles from './index.scss';

const TabPane = Tabs.TabPane;

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Tabs defaultActiveKey="1" className={styles.tabs}>
        <TabPane tab="详细描述" key="1"><Description /></TabPane>
        <TabPane tab="累计评价" key="2"><Comment /></TabPane>
        <TabPane tab="地图定位" key="3"><Address /></TabPane>
      </Tabs>
    );
  }
}

