import React from 'react';
import { Card } from 'antd';
import styles from './index.module.scss';

const { Meta } = Card;
const arr = [...Array(3).keys()].map((item, index) => (
  <li key={index}>
    <Card
      hoverable
      style={{ width: 180 }}
      cover={<img alt="example" src="https://t1.58cdn.com.cn/bidding/big/n_v2a1722f55b25a4da08462e451135ce481.jpg" height={200} />}
    >
      <Meta
        title="《皇冠商家品质保障》"
        description="全市上门开锁 换锁"
      />
    </Card>
  </li>
));

export default function () {
  return (
    <ul className={styles.advertiseWrapper}>
      {arr}
    </ul>
  );
}
