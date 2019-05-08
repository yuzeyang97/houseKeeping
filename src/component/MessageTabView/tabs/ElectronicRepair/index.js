import React from 'react';
import ContentTab from '../ContentCommenTab';
import firstTabMap from '../../../../config/tabConfig';

const shouji_icon = require('../../../../resource/img/tabs/electronicRepair/shouji_icon.png');
const shuma_icon = require('../../../../resource/img/tabs/electronicRepair/shuma_icon.png');
const weixiu_icon = require('../../../../resource/img/tabs/electronicRepair/weixiu_icon.png');

const tabs = [
  {
    tabsName: '电脑维修',
    icon: weixiu_icon,
    firstParams: 'diannaoweixiu',
    sonTab: firstTabMap.diannaoweixiu.secondTab
  },
  {
    tabsName: '手机维修',
    icon: shouji_icon,
    firstParams: 'shoujiweixiu',
    sonTab: firstTabMap.shoujiweixiu.secondTab
  }, {
    tabsName: '数码维修',
    icon: shuma_icon,
    firstParams: 'shumaweixiu',
    sonTab: firstTabMap.shumaweixiu.secondTab
  }
];

export default function () {
  return (
    <div>
      {tabs.map((item, index) => <ContentTab tab={item} key={index} />)}
    </div>
  );
}
