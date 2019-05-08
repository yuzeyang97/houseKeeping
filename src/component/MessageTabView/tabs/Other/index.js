import React from 'react';
import ContentTab from '../ContentCommenTab';
import firstTabMap from '../../../../config/tabConfig';

const yanglaoyuan_icon = require('../../../../resource/img/tabs/other/yanglaoyuan_icon.png');
const fuwu_icon = require('../../../../resource/img/tabs/other/fuwu_icon.png');
const baishi_icon = require('../../../../resource/img/tabs/other/baishi_icon.png');

const tabs = [
  {
    tabsName: '养老院',
    icon: yanglaoyuan_icon,
    firstParams: 'yanglaoyuan',
    sonTab: firstTabMap.yanglaoyuan.secondTab
  },
  {
    tabsName: '公共服务',
    icon: fuwu_icon,
    firstParams: 'gonggongfuwu',
    sonTab: firstTabMap.gonggongfuwu.secondTab
  }, {
    tabsName: '白事服务',
    icon: baishi_icon,
    firstParams: 'baishifuwu',
    sonTab: firstTabMap.baishifuwu.secondTab
  }
];

export default function () {
  return (
    <div>
      {tabs.map((item, index) => <ContentTab tab={item} key={index} />)}
    </div>
  );
}
