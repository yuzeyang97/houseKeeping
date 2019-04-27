import React from 'react';
import { Breadcrumb } from 'antd';

export default function (props) {
  return (
    <Breadcrumb separator=">">
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item href="">{props.firstTab}</Breadcrumb.Item>
      <Breadcrumb.Item href="">{props.secondTab.name}</Breadcrumb.Item>
      <Breadcrumb.Item>An Application</Breadcrumb.Item>
    </Breadcrumb>
  );
}
