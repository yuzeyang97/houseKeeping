import React from 'react';
import { Modal, message } from 'antd';
import axios from 'axios';
import Tab from './Tab';
import Slider from '../../AdvertisementSlider';
import styles from './index.scss';

// import styles from './style.scss';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      name: '政府采购企业 诚信经营25年 本月优惠啦',
      time: '2018-07-24',
      totalcount: 1420338
    };
  }

  render() {
    return (
      <div className={styles.content}>
        <Tab />
        <Slider />
      </div>
    );
  }
}
