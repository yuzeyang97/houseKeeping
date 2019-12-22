import React from 'react';
import { List, Button } from 'antd';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const listData = [];

export default class MerchantList extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    console.log(this.props);
    for (let i = 0; i < 23; i++) {
      listData.push({
        href: `/shop/${this.props.firstTab}/${this.props.secondTab.secondParams}/:1`,
        title: `机械设备起重、搬运、吊装、就位、人工起${i}`,
        avatar: 'https://t1.58cdn.com.cn/bidding/small/n_v2c0f73fc40f934970998ef8a8be12fa28.jpg?w=160&h=120&ss=1',
        description: '北京崇宣阁设备安装有限公司',
        content: '主营精密设备搬运、大型厂房搬迁、吊装起重、设备安装维修维抑等业务，自成立以来，崇宣阁以自身多年技术经验和知识积累为背景，聚焦于精密设备维修维护、重型设备起重安装服务，配置了齐全的精密设备搬运工具，拥有100多名5年以上精密设备搬运作业人员，全国连锁运营，是国内服务网点比较健全的、专业的大型起重公司机械设备大修与项修主营精密设备搬运、大型厂房搬迁、吊装起重、设备安装维修维抑等业务，自成立以来，崇宣阁以自身多年技术经验和知识积累为背景，聚焦于精密设备维修维护、重型设备起重安装服务，配置了齐全的精密设备搬运工具，拥有100多名5年以上精密设备搬运作业人员，全国连锁运营，是国内服务网点比较健全的、专业的大型起重公司机械设备大修与项修主营精密设备搬运、大型厂房搬迁、吊装起重、设备安装维修维抑等业务，自成立以来，崇宣阁以自身多年技术经验和知识积累为背景，聚焦于精密设备维修维护、重型设备起重安装服务，配置了齐全的精密设备搬运工具，拥有100多名5年以上精密设备搬运作业人员，全国连锁运营，是国内服务网点比较健全的、专业的大型起重公司机械设备大修与项修主营精密设备搬运、大型厂房搬迁、吊装起重、设备安装维修维抑等业务，自成立以来，崇宣阁以自身多年技术经验和知识积累为背景，聚焦于精密设备维修维护、重型设备起重安装服务，配置了齐全的精密设备搬运工具，拥有100多名5年以上精密设备搬运作业人员，全国连锁运营，是国内服务网点比较健全的、专业的大型起重公司机械设备大修与项修',
      });
    }
  }
  handleBtn=href => {
    this.props.history.push(href);
  }
  render() {
    return (
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 5,
        }}
        style={{ paddingBottom: '40px', width: '1000px' }}
        dataSource={listData}
        footer={<div><b>数据源</b>:58同城</div>}
        renderItem={item => (
          <List.Item
            key={item.title}
            extra={<img width={160} height={120} style={{ marginRight: '20px', marginLeft: '-40px' }} alt="logo" src="https://t1.58cdn.com.cn/bidding/small/n_v2c0f73fc40f934970998ef8a8be12fa28.jpg?w=160&h=120&ss=1" />}
            className={styles.listItem}
          >
            <div>
              <List.Item.Meta
                style={{ marginBottom: 0, width: '670px' }}
                title={<Link to={item.href}>{item.title}</Link>}
                description={item.description}
              />
              <div className={styles.content} style={{ WebkitBoxOrient: 'vertical', width: '670px' }}>
                {item.content}
              </div>
            </div>
            <div style={{ marginLeft: '20px' }}>
              <Button type="primary" onClick={this.handleBtn.bind(this, item.href)}>联系商家</Button>
            </div>

          </List.Item>
        )}
      />
    );
  }
}
