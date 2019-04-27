import React from 'react';
import ContentTab from '../ContentCommenTab';

const yanglaoyuan_icon = require('../../../../resource/img/tabs/other/yanglaoyuan_icon.png');
const fuwu_icon = require('../../../../resource/img/tabs/other/fuwu_icon.png');
const baishi_icon = require('../../../../resource/img/tabs/other/baishi_icon.png');

const tabs = [
  {
    tabsName: '养老院',
    icon: yanglaoyuan_icon,
    sonTab: [
      {
        name: '养老院',
        url: ''
      }
    ]
  },
  {
    tabsName: '公共服务',
    icon: fuwu_icon,
    sonTab: [
      {
        name: '银行',
        url: ''
      },
      {
        name: '自来水/电力营业厅',
        url: ''
      },
      {
        name: '邮局通讯',
        url: ''
      },
      {
        name: '加油站',
        url: ''
      },
      {
        name: '金融机构',
        url: ''
      }
    ]
  }, {
    tabsName: '白事服务',
    icon: baishi_icon,
    sonTab: [
      {
        name: '殡仪馆/殡葬服务',
        url: ''
      },
      {
        name: '墓地陵园',
        url: ''
      },
      {
        name: '殡葬用品',
        url: ''
      },
      {
        name: '火葬',
        url: ''
      },
      {
        name: '骨灰盒',
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
