import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default function (props) {
  const { tab } = props;
  return (
    <dl >
      <dt className={styles.tabHeader}><img src={tab.icon} className={styles.tabIcon} /><span className={styles.tabText}>{tab.tabsName}</span></dt>
      <dd className={styles.tabsContent}>
        {tab.sonTab.map((item, index) => <Link to={`/detail/${tab.firstParams}/${item.secondParams}`} key={index} className={styles.link}>{item.name}</Link>)}
      </dd>
    </dl>
  );
}
