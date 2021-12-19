import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import React from 'react';

const { Header, Content, Footer } = Layout;

export default function Root(props) {

  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key={1213}>Current User: {props.headerUser}</Menu.Item>
      </Menu>
    </Header>
  );
}
