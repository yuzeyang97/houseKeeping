import React from 'react';
import styles from './index.module.scss';

// import styles from './style.module.scss';

export default class BasicInfo extends React.Component {
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
      <div className={styles.cardWrapper}>
        <pre>类  别:  <span>居民搬家</span></pre>
        <pre>服务区域:  <span>朝阳  海淀  西城  东城  丰台  通州  石景山  房山 </span></pre>
        <pre>联系人:  <span>邹女士</span></pre>
        <pre>联系电话:  <span>13079813281</span></pre>
        <pre>商家地址:  <span>金海商富中心b座</span></pre>
      </div>
    );
  }
}
