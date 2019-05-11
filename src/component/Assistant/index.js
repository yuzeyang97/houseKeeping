import React from 'react';
import styles from './style.scss';

const HOUSEKEEPER_ICON = require('../../resource/img/tabs/assistant/baomu_icon_1.png');
const CLEANER_ICON = require('../../resource/img/tabs/assistant/baojie_icon_2.png');
const LIFESKLILL_ICON = require('../../resource/img/tabs/assistant/shenghuo_icon_3.png');
const VIOLATION_ENQUIRY_ICON = require('../../resource/img/tabs/assistant/weizhang_icon_4.png');


const tabArrs = [
  {
    tabName: '找保姆',
    icon: HOUSEKEEPER_ICON,
    link: '/detail/baomu/baomu'
  }, {
    tabName: '清洁专家',
    icon: CLEANER_ICON,
    link: '/detail/baojieqingxi/jiatingbaojie'
  }, {
    tabName: '生活技巧',
    icon: LIFESKLILL_ICON,
    link: 'http://www.sohu.com/a/221569210_440562'
  }, {
    tabName: '违章查询',
    icon: VIOLATION_ENQUIRY_ICON,
    link: 'https://bj.122.gov.cn/'
  },

];

export default function Assistant() {
  console.log(styles);
  function handleClick(item) {
    window.location.href = item.link;
  }
  return (
    <div className={styles.listWrapper}>
      <h3>便民助手</h3>
      {
        tabArrs.map((item, index) => (<div className={styles.listLi} onClick={handleClick.bind(this, item)} key={index}>
          <img src={item.icon} className={styles.liimg} />
          <p>{item.tabName}</p>
        </div>))
      }
    </div>
  );
}

