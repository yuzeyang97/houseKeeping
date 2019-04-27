import React from 'react';
import styles from './index.scss';

export default function (props) {
  const { tab } = props;
  return (
    <dl >
      <dt className={styles.tabHeader}><img src={tab.icon} className={styles.tabIcon} /><span className={styles.tabText}>{tab.tabsName}</span></dt>
      <dd className={styles.tabsContent}>
        {tab.sonTab.map((item, index) => <a href={item.url} key={index} className={styles.link}>{item.name}</a>)}
      </dd>
    </dl>
  );
}
