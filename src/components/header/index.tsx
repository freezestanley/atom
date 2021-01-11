/**
 * @description 描述
 */
import React, { FC, useState } from 'react';
import { Button, Menu } from 'antd';
import { history } from 'umi';
import styles from './styles/index.less';
const { SubMenu } = Menu;
interface PropTypes {}
const Header: FC<PropTypes> = function(props) {
  const [current, setCurrent] = useState('mail'),
    pageList = [
      {
        key: '/home',
        title: 'Home',
      },
      {
        key: '/stolist',
        title: 'STO Projects ',
      },
      {
        key: '/howitworks',
        title: 'How It Works',
      },
      {
        key: '/whoweare',
        title: 'Who We Are',
      },
    ];
  function renderPages() {
    return pageList.map(item => {
      return <Menu.Item key={item.key}>{item.title}</Menu.Item>;
    });
  }
  function handleClick({ key }) {
    setCurrent(key);
    history.push(`/home${key}`);
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
            {renderPages()}
          </Menu>
        </div>
        <Button type="primary">Get in Touch</Button>
      </header>
    </div>
  );
};

export default Header;
