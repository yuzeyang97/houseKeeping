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
      <div>
        <div className={styles.title}>
          <h1 className={styles.name}>{this.state.name}</h1>
          <div className={styles.info}>
            <span className={styles.time}>{`${this.state.time}  发布`}</span>
            <span className={styles.totalcount}>{this.state.totalcount}次浏览</span>
          </div>
        </div>
      </div>
    );
  }
}
