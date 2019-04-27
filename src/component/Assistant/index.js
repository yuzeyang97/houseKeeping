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
    link: '/detail/houseKeeper'
  }, {
    tabName: '清洁专家',
    icon: CLEANER_ICON,
    link: '/detail/cleaner'
  }, {
    tabName: '生活技巧',
    icon: LIFESKLILL_ICON,
    link: '/detail/lifeSkill'
  }, {
    tabName: '违章查询',
    icon: VIOLATION_ENQUIRY_ICON,
    link: '/detail/violationEnquiry'
  },

];

export default function Assistant() {
  console.log(styles);
  return (
    <div className={styles.listWrapper}>
      <h3>便民助手</h3>
      {
        tabArrs.map(item => (<div className={styles.listLi}>
          <img src={item.icon} className={styles.liimg} />
          <p>{item.tabName}</p>
        </div>))
      }
    </div>
  );
}

