import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import styles from './style.scss';

const icon = require('../../../../resource/img/tabs/zhaobanjia.png');
const backicon = require('../../../../resource/img/tabs/banjiaad_yunying.png');

const contentArr = [
  { name: '公司搬家' },
  { name: '居民搬家' },
  { name: '长途搬家' },
  { name: '搬家搬场' },
  { name: '小型搬家' },
  { name: '钢琴搬运' },
  { name: '设备搬迁' },
  { name: '空调移机' },
  { name: '起重吊装' },
  { name: '家具拆装' },
  { name: '国际搬家' },
];

export default function () {
  return (
    <div>
      <div className={styles.contentHeader}>
        <img src={icon} className={styles.contentTitleIcon} />
        <span className={styles.iconText}>搬家</span>
      </div>
      <div className={styles.detailProject}>
        {contentArr.map((item, index) => <Link key={index}>{item.name}</Link>)}
      </div>

      <div className={styles.contentCenter}>
        <div className={styles.firstTitle}>据说现在搬家最划算喔!</div>
        <div className={styles.secondTitle}>动动手指 即刻搬家 </div>
        <Button className={styles.removeBtn}>马上搬家</Button>
        <img src={backicon} className={styles.contentCenterImg} />
      </div>
    </div>
  );
}
