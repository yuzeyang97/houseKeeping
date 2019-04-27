import React from 'react';
import ContentTab from '../ContentCommenTab';

const baojie_icon = require('../../../../resource/img/tabs/drags/baojie_icon.png');
const shutong_icon = require('../../../../resource/img/tabs/drags/shutong_icon.png');

const tabs = [
  {
    tabsName: '保洁清洗',
    icon: baojie_icon,
    sonTab: [
      {
        name: '物业保洁',
        url: ''
      },
      {
        name: '家庭保洁',
        url: ''
      },
      {
        name: '空调清晰',
        url: ''
      },
      {
        name: '冰箱清洗',
        url: ''
      },
      {
        name: '洗衣机清洗',
        url: ''
      },
      {
        name: '饮水机清洗',
        url: ''
      }
    ]
  },
  {
    tabsName: '管道疏通',
    icon: shutong_icon,
    sonTab: [
      {
        name: '马桶疏通',
        url: ''
      },
      {
        name: '下水道疏通',
        url: ''
      },
      {
        name: '化粪池清理',
        url: ''
      },
      {
        name: '管道安装/改造',
        url: ''
      },
      {
        name: '化粪池清理',
        url: ''
      },
      {
        name: '打捞',
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
