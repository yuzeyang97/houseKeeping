import React from 'react';
import { Tabs } from 'antd';
import styles from './style.scss';
import MoveHouse from './tabs/MoveHouse';
import Housekeeper from './tabs/Housekeeper';
import ApplianceRepair from './tabs/ApplianceRepair';
import ElectronicRepair from './tabs/ElectronicRepair';
import Dredge from './tabs/Dredge';
import DailyLife from './tabs/DailyLife';
import Other from './tabs/Other';


const TabPane = Tabs.TabPane;
const MoveHouse_ICON = require('../../resource/img/tabs/banjia_s.png');
const Housekeeper_ICON = require('../../resource/img/tabs/baomu_s.png');
const ApplianceRepair_ICON = require('../../resource/img/tabs/weixiu_s.png');
const ElectronicRepair_ICON = require('../../resource/img/tabs/xiushouji_s.png');
const Dredge_ICON = require('../../resource/img/tabs/shutong_s.png');
const DailyLife_ICON = require('../../resource/img/tabs/shenghuo_s.png');
const Other_ICON = require('../../resource/img/tabs/qita_s.png');

const tabArrs = [
  {
    tabName: '搬家',
    tabContent: <MoveHouse />,
    icon: MoveHouse_ICON,
    tabSon: ['空调移机', '设备迁移']
  },
  {
    tabName: '放心阿姨',
    tabContent: <Housekeeper />,
    icon: Housekeeper_ICON,
    tabSon: ['保姆', '月嫂', '钟点工']

  },
  {
    tabName: '家电维修',
    tabContent: <ApplianceRepair />,
    icon: ApplianceRepair_ICON,
    tabSon: ['家具', '家电']

  },
  {
    tabName: '电子维修',
    tabContent: <ElectronicRepair />,
    icon: ElectronicRepair_ICON,
    tabSon: ['电脑', '手机', '数码']

  },
  {
    tabName: '清修/疏通',
    tabContent: <Dredge />,
    icon: Dredge_ICON,
    tabSon: ['保洁', '疏通管道']

  },
  {
    tabName: '日常生活',
    tabContent: <DailyLife />,
    icon: DailyLife_ICON,
    tabSon: ['配送', '鲜花', '回收']

  },
  {
    tabName: '其他',
    tabContent: <Other />,
    icon: Other_ICON,
    tabSon: ['养老院', '白事']
  }
];

export default function MessageTabView() {
  console.log(styles);
  return (
    <Tabs tabPosition="left" style={{ width: '1190px', marginTop: '25px', height: '464px' }}>
      {
        tabArrs.map((item, index) => (
          <TabPane
            key={index + 1}
            tab={<span className={styles.sliderTapWrapper} >
              <img src={item.icon} className={styles.icon} />
              <span className={styles.iconText}>{item.tabName}</span>
              {item.tabSon.map((sonItem, index) => <a key={index} className={styles.tabSon}>{sonItem}</a>)}
            </span>}
            style={{ width: '740px' }}
          >
            {item.tabContent}
          </TabPane>
        ))
      }
    </Tabs>
  );
}

