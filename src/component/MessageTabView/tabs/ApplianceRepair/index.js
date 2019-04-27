import React from 'react';
import ContentTab from '../ContentCommenTab';

const fwweixiu_icon = require('../../../../resource/img/tabs/applianceRepair/fwweixiu_icon.png');
const jjweixiu_icon = require('../../../../resource/img/tabs/applianceRepair/jjweixiu_icon.png');
const jsweixiu_icon = require('../../../../resource/img/tabs/applianceRepair/jsweixiu_icon.png');
const kaisuo_icon = require('../../../../resource/img/tabs/applianceRepair/kaisuo_icon.png');

const tabs = [
  {
    tabsName: '房屋维修',
    icon: fwweixiu_icon,
    sonTab: [
      {
        name: '防水补漏',
        url: ''
      },
      {
        name: '卫浴/洁具维修',
        url: ''
      },
      {
        name: '灯具维修',
        url: ''
      },
      {
        name: '电路维修/安装',
        url: ''
      },
      {
        name: '水管/水龙头维修',
        url: ''
      },
      {
        name: '门窗维修/安装',
        url: ''
      }
    ]
  },
  {
    tabsName: '家电维修',
    icon: jjweixiu_icon,
    sonTab: [
      {
        name: '冰箱',
        url: ''
      },
      {
        name: '洗衣机',
        url: ''
      },
      {
        name: '空调',
        url: ''
      },
      {
        name: '电视',
        url: ''
      },
      {
        name: '厨房家电',
        url: ''
      },
      {
        name: '热水器',
        url: ''
      }
    ]
  }, {
    tabsName: '家具维修',
    icon: jsweixiu_icon,
    sonTab: [
      {
        name: '沙发',
        url: ''
      },
      {
        name: '桌椅柜',
        url: ''
      },
      {
        name: '地板',
        url: ''
      },
      {
        name: '办公家具',
        url: ''
      },
      {
        name: '钟表',
        url: ''
      }
    ]
  }, {
    tabsName: '开锁/换锁/修锁',
    icon: kaisuo_icon,
    sonTab: [
      {
        name: '开锁/换锁/修锁',
        url: ''
      }
    ]
  }
];

export default function () {
  return (
    <div>
      {tabs.map((item, index) => <ContentTab tab={item} key={index} />)}
    </div>
  );
}
