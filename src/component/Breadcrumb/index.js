import React from 'react';
import { Breadcrumb } from 'antd';
import firstTabMap from '../../config/tabConfig';

export default function (props) {
  return (
    <Breadcrumb separator=">">
      <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
      <Breadcrumb.Item href="">{firstTabMap[props.firstTab].name}</Breadcrumb.Item>
      <Breadcrumb.Item href="">{props.secondTab.name}</Breadcrumb.Item>
    </Breadcrumb>
  );
}
