import React from 'react';
import { List, Card, Button, message } from 'antd';
import styles from './index.module.scss';

const data = [
  {
    title: '北京兄弟金牌搬家服务有限公司',
    id: 1,
    firstTab: 'banjia',
    secondTab: 'juminbanjia',
  },
  {
    title: '北京兄弟金牌搬家服务有限公司',
    id: 2,
    firstTab: 'banjia',
    secondTab: 'juminbanjia',
  },
  {
    title: '北京兄弟金牌搬家服务有限公司',
    id: 3,
    firstTab: 'banjia',
    secondTab: 'juminbanjia',
  },
  {
    title: '北京兄弟金牌搬家服务有限公司',
    id: 4,
    firstTab: 'banjia',
    secondTab: 'juminbanjia',
  }, {
    title: '北京兄弟金牌搬家服务有限公司',
    id: 5,
    firstTab: 'banjia',
    secondTab: 'juminbanjia',
  },
  {
    title: '北京兄弟金牌搬家服务有限公司',
    id: 6,
    firstTab: 'banjia',
    secondTab: 'juminbanjia',
  },
  {
    title: '北京兄弟金牌搬家服务有限公司',
    id: 7,
    firstTab: 'banjia',
    secondTab: 'juminbanjia',
  }
];

export default class Person extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  handleDelete=e => {
    const dataid = e.currentTarget.getAttribute('dataid');
    message.success(`删除的ID为${dataid}`);
    e.stopPropagation();
  }
  handleCard=item => {
    this.props.history.push(`/shop/${item.firstTab}/${item.secondTab}/${item.id}`);
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
            renderItem={(item, index) => (
              <List.Item>
                <Card
                  title={item.title}
                  onClick={this.handleCard.bind(this, item)}
                  className={styles.card}
                  extra={<Button
                    onClick={this.handleDelete}
                    dataid={item.id}
                  >删除</Button>}
                >
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
