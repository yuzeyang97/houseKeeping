import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import styles from './style.scss';

const icon = require('../../../../resource/img/tabs/baomu_icon.png');
const backicon = require('../../../../resource/img/tabs/baomuad_yunying.png');

const contentArr = [
  { name: '保姆' },
  { name: '钟点工' },
  { name: '月嫂' },
  { name: '育婴师/育儿嫂' },
  { name: '催乳师' },
  { name: '月子中心' },
  { name: '陪护' },
  { name: '管家' },
  { name: '涉外家政' }
];

export default function () {
  return (
    <div>
      <div className={styles.contentHeader}>
        <img src={icon} className={styles.contentTitleIcon} />
        <span className={styles.iconText}>保姆/月嫂</span>
      </div>
      <div className={styles.detailProject}>
        {contentArr.map((item, index) => <Link key={index}>{item.name}</Link>)}
      </div>

      <div className={styles.contentCenter}>
        <div className={styles.firstTitle}>保姆月嫂 无忧家政</div>
        <div className={styles.secondTitle}>让你生活更省心 </div>
        <Button className={styles.findBtn}>找保姆</Button>
        <img src={backicon} className={styles.contentCenterImg} />
      </div>
    </div>
  );
}
