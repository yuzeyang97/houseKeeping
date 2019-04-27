import React from 'react';
import ContentTab from '../ContentCommenTab';

const shouji_icon = require('../../../../resource/img/tabs/electronicRepair/shouji_icon.png');
const shuma_icon = require('../../../../resource/img/tabs/electronicRepair/shuma_icon.png');
const weixiu_icon = require('../../../../resource/img/tabs/electronicRepair/weixiu_icon.png');

const tabs = [
  {
    tabsName: '电脑维修',
    icon: weixiu_icon,
    sonTab: [
      {
        name: '笔记本电脑',
        url: ''
      },
      {
        name: '台式电脑',
        url: ''
      },
      {
        name: 'ipad/平板电脑',
        url: ''
      },
      {
        name: '服务器维修',
        url: ''
      },
      {
        name: '数据恢复',
        url: ''
      },
      {
        name: '网络维修',
        url: ''
      }
    ]
  },
  {
    tabsName: '手机维修',
    icon: shouji_icon,
    sonTab: [
      {
        name: '苹果',
        url: ''
      },
      {
        name: '三星',
        url: ''
      },
      {
        name: '小米',
        url: ''
      },
      {
        name: '华为',
        url: ''
      },
      {
        name: '魅族',
        url: ''
      },
      {
        name: '联想',
        url: ''
      }
    ]
  }, {
    tabsName: '数码维修',
    icon: shuma_icon,
    sonTab: [
      {
        name: '数码相机',
        url: ''
      },
      {
        name: '摄像机',
        url: ''
      },
      {
        name: '单反相机/单反配件',
        url: ''
      },
      {
        name: '单电/微电相机',
        url: ''
      },
      {
        name: '游戏机',
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
