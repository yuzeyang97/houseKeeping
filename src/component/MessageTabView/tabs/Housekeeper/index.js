import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import firstTabMap from '../../../../config/tabConfig';
import styles from './style.scss';

const icon = require('../../../../resource/img/tabs/baomu_icon.png');
const backicon = require('../../../../resource/img/tabs/baomuad_yunying.png');

const contentArr = firstTabMap.baomu.secondTab;


export default function () {
  function handleBtn() {
    window.location.href = '/detail/baomu/baomu';
  }
  return (
    <div>
      <div className={styles.contentHeader}>
        <img src={icon} className={styles.contentTitleIcon} />
        <span className={styles.iconText}>保姆/月嫂</span>
      </div>
      <div className={styles.detailProject}>
        {contentArr.map((item, index) => <Link key={index} to={`detail/baomu/${item.secondParams}`}>{item.name}</Link>)}
      </div>

      <div className={styles.contentCenter}>
        <div className={styles.firstTitle}>保姆月嫂 无忧家政</div>
        <div className={styles.secondTitle}>让你生活更省心 </div>
        <Button className={styles.findBtn} onClick={handleBtn}>找保姆</Button>
        <img src={backicon} className={styles.contentCenterImg} />
      </div>
    </div>
  );
}
