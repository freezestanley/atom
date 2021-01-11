/**
 * @description 描述
 */
import React, { FC, useState } from 'react';
import { Button, Menu } from 'antd';
import styles from './styles/index.less';
const { SubMenu } = Menu;
interface PropTypes {}
const Header: FC<PropTypes> = function(props) {
  const [current, setCurrent] = useState('mail'),
    pageList = [
      {
        key: 'home',
        title: 'Home',
        url: '/home',
      },
      {
        key: 'home',
        title: 'STO Projects ',
        url: '/stolist',
      },
      {
        key: 'home',
        title: 'How It Works',
        url: '/howitworks',
      },
      {
        key: 'home',
        title: 'Who We Are',
        url: '/whoweare',
      },
    ];
  function renderPages() {}
  function handleClick({ key }) {
    setCurrent(key);
  }
  return (
    <div className={styles['header']}>
      <header>
        <div className={styles['logo']}></div>
        <div className={styles['pages']}>
          <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
          >
            <Menu.Item key="mail">Navigation One</Menu.Item>
            <Menu.Item key="app">Navigation Two</Menu.Item>
            <Menu.Item key="alipay">Navigation Four - Link</Menu.Item>
          </Menu>
        </div>
        <Button type="primary">Get in Touch</Button>
      </header>
    </div>
  );
};

export default Header;
