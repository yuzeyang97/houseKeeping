import React from 'react';
import ContentTab from '../ContentCommenTab';
import firstTabMap from '../../../../config/tabConfig';

const baojie_icon = require('../../../../resource/img/tabs/drags/baojie_icon.png');
const shutong_icon = require('../../../../resource/img/tabs/drags/shutong_icon.png');

const tabs = [
  {
    tabsName: '保洁清洗',
    icon: baojie_icon,
    firstParams: 'baojieqingxi',
    sonTab: firstTabMap.baojieqingxi.secondTab
  },
  {
    tabsName: '管道疏通',
    icon: shutong_icon,
    firstParams: 'guandaoshutong',
    sonTab: firstTabMap.guandaoshutong.secondTab
  }
];

export default function () {
  return (
    <div>
      {tabs.map((item, index) => <ContentTab tab={item} key={index} />)}
    </div>
  );
}
