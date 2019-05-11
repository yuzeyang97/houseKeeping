import React from 'react';
import { List, Button } from 'antd';
import { Link } from 'react-router-dom';
import './index.css';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: '/shop/banjia/kongtiaoyiji/:1',
    title: `机械设备起重、搬运、吊装、就位、人工起 ${i}`,
    tabType: '搬家搬场',
    content: '京城老字号30分钟响应全北京！随叫随到！多快好省！ 京城老字号30分钟响应全北京！随叫随到！多快好省！ 京城老字号30分钟响应全北京！随叫随到！多快好省！',
  });
}

export default class Person extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className="releaseWrapper">
        {/* 我的发布 */}
        <h2>我的发布</h2>
        <div>
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 3,
            }}
            dataSource={listData}
            footer={<div><b>数据来源：</b> 58同城</div>}
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={[<Button type="star-o" text="156">取消发布</Button>]}
                extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
              >
                <List.Item.Meta
                  title={<Link to={item.href}>{item.title}</Link>}
                  description={`类别：${item.tabType}`}
                />
                {item.content}
              </List.Item>
            )}
          />
        </div>
      </div>);
  }
}
