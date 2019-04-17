import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import styles from './style.scss';

const { Header, Content, Footer } = Layout;


export default function NavBar() {
  console.log(styles);
  return (
    <Header style={{ position: 'fixed', width: '100%', top: 0, zIndex: 9999 }}>
      <div className={styles.logo}>
        同城本地服务
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/about">关于</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/topics">登陆</Link></Menu.Item>
      </Menu>
    </Header>
  );
}
