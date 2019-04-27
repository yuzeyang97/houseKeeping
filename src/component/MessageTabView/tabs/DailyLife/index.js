import React from 'react';
import ContentTab from '../ContentCommenTab';

const ganxi_icon = require('../../../../resource/img/tabs/dailyLife/ganxi_icon.png');
const huishou_icon = require('../../../../resource/img/tabs/dailyLife/huishou_icon.png');
const lvzhi_icon = require('../../../../resource/img/tabs/dailyLife/lvzhi_icon.png');
const peisong_icon = require('../../../../resource/img/tabs/dailyLife/peisong_icon.png');

const tabs = [
  {
    tabsName: '生活配送',
    icon: peisong_icon,
    sonTab: [
      {
        name: '煤气/液化气',
        url: ''
      },
      {
        name: '煤炭',
        url: ''
      },
      {
        name: '桶装水',
        url: ''
      },
      {
        name: '蔬菜水果',
        url: ''
      },
      {
        name: '粮油副食',
        url: ''
      },
      {
        name: '机场接送',
        url: ''
      }
    ]
  },
  {
    tabsName: '鲜花绿植',
    icon: lvzhi_icon,
    sonTab: [
      {
        name: '鲜花',
        url: ''
      },
      {
        name: '绿植栽培',
        url: ''
      },
      {
        name: '园林/园艺',
        url: ''
      },
      {
        name: '仿真花',
        url: ''
      },
      {
        name: '卡通花',
        url: ''
      }
    ]
  }, {
    tabsName: '二手回收',
    icon: huishou_icon,
    sonTab: [
      {
        name: '手机',
        url: ''
      },
      {
        name: '电脑',
        url: ''
      },
      {
        name: '家具',
        url: ''
      },
      {
        name: '电器',
        url: ''
      },
      {
        name: '金银',
        url: ''
      }
    ]
  }, {
    tabsName: '干洗/洗衣/修鞋',
    icon: ganxi_icon,
    sonTab: [
      {
        name: '干洗',
        url: ''
      },
      {
        name: '改衣',
        url: ''
      },
      {
        name: '修鞋',
        url: ''
      },
      {
        name: '皮衣护理',
        url: ''
      },
      {
        name: '皮鞋护理',
        url: ''
      },
      {
        name: '汽车座椅清洗养护',
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
