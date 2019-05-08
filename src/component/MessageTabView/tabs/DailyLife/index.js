import React from 'react';
import ContentTab from '../ContentCommenTab';
import firstTabMap from '../../../../config/tabConfig';

const ganxi_icon = require('../../../../resource/img/tabs/dailyLife/ganxi_icon.png');
const huishou_icon = require('../../../../resource/img/tabs/dailyLife/huishou_icon.png');
const lvzhi_icon = require('../../../../resource/img/tabs/dailyLife/lvzhi_icon.png');
const peisong_icon = require('../../../../resource/img/tabs/dailyLife/peisong_icon.png');

const tabs = [
  {
    tabsName: '生活配送',
    icon: peisong_icon,
    firstParams: 'shenghuopeisong',
    sonTab: firstTabMap.shenghuopeisong.secondTab
  },
  {
    tabsName: '鲜花绿植',
    icon: lvzhi_icon,
    firstParams: 'xianhualvzhi',
    sonTab: firstTabMap.xianhualvzhi.secondTab
  }, {
    tabsName: '二手回收',
    icon: huishou_icon,
    firstParams: 'ershouhuishou',
    sonTab: firstTabMap.ershouhuishou.secondTab

  }, {
    tabsName: '干洗/洗衣/修鞋',
    icon: ganxi_icon,
    firstParams: 'ganxi',
    sonTab: firstTabMap.ganxi.secondTab
  }];

export default function () {
  return (
    <div>
      {tabs.map((item, index) => <ContentTab tab={item} key={index} />)}
    </div>
  );
}
