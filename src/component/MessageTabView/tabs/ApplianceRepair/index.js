import React from 'react';
import ContentTab from '../ContentCommenTab';
import firstTabMap from '../../../../config/tabConfig';

const fwweixiu_icon = require('../../../../resource/img/tabs/applianceRepair/fwweixiu_icon.png');
const jjweixiu_icon = require('../../../../resource/img/tabs/applianceRepair/jjweixiu_icon.png');
const jsweixiu_icon = require('../../../../resource/img/tabs/applianceRepair/jsweixiu_icon.png');
const kaisuo_icon = require('../../../../resource/img/tabs/applianceRepair/kaisuo_icon.png');

const tabs = [
  {
    tabsName: '房屋维修',
    icon: fwweixiu_icon,
    firstParams: 'fangwuweixiu',
    sonTab: firstTabMap.fangwuweixiu.secondTab
  },
  {
    tabsName: '家电维修',
    icon: jjweixiu_icon,
    firstParams: 'jiadianweixiu',
    sonTab: firstTabMap.jiadianweixiu.secondTab
  }, {
    tabsName: '家具维修',
    icon: jsweixiu_icon,
    firstParams: 'jiajuweixiu',
    sonTab: firstTabMap.jiajuweixiu.secondTab
  }, {
    tabsName: '开锁/换锁/修锁',
    firstParams: 'kaisuo',
    icon: kaisuo_icon,
    sonTab: firstTabMap.kaisuo.secondTab
  }
];

export default function () {
  return (
    <div>
      {tabs.map((item, index) => <ContentTab tab={item} key={index} />)}
    </div>
  );
}
