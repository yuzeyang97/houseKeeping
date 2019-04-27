import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { banjia as banjiaTabList } from '../../../../config/tabConfig';
import styles from './style.scss';

const icon = require('../../../../resource/img/tabs/zhaobanjia.png');
const backicon = require('../../../../resource/img/tabs/banjiaad_yunying.png');


const contentArr = banjiaTabList;

export default function () {
  return (
    <div>
      <div className={styles.contentHeader}>
        <img src={icon} className={styles.contentTitleIcon} />
        <span className={styles.iconText}>搬家</span>
      </div>
      <div className={styles.detailProject}>
        {contentArr.map((item, index) => <Link key={index} title={item.url} to={`detail/banjia/${item.secondParams}`}>{item.name}</Link>)}
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
