import React from 'react';
import { List, Card, Button } from 'antd';
import styles from './index.scss';

const data = [
  {
    title: '北京兄弟金牌搬家服务有限公司',
  },
  {
    title: '北京兄弟金牌搬家服务有限公司',
  },
  {
    title: '北京兄弟金牌搬家服务有限公司',
  },
  {
    title: '北京兄弟金牌搬家服务有限公司',
  }, {
    title: '北京兄弟金牌搬家服务有限公司',
  },
  {
    title: '北京兄弟金牌搬家服务有限公司',
  },
  {
    title: '北京兄弟金牌搬家服务有限公司',
  },
  {
    title: '北京兄弟金牌搬家服务有限公司',
  }, {
    title: '北京兄弟金牌搬家服务有限公司',
  },
  {
    title: '北京兄弟金牌搬家服务有限公司',
  },
  {
    title: '北京兄弟金牌搬家服务有限公司',
  },
  {
    title: '北京兄弟金牌搬家服务有限公司',
  },
];

export default class Person extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div>
        {/* 我的收藏 */}
        <h2>我的收藏</h2>
        <div>
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Card title={item.title} extra={<Button href="#">删除</Button>}>
                  <div className={styles.cardContent}>
                    京城老字号30分钟响应全北京！随叫随到！多快好省！
                    京城老字号30分钟响应全北京！随叫随到！多快好省！
                    京城老字号30分钟响应全北京！随叫随到！多快好省！
                  </div>
                </Card>
              </List.Item>
            )}
          />
        </div>
      </div>);
  }
}
