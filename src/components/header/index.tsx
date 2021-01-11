/**
 * @description 描述
 */
import React, { FC, useState, useEffect } from 'react';
import { Button, Menu } from 'antd';
import { history } from 'umi';
import styles from './styles/index.less';
interface PropTypes {}
const Header: FC<PropTypes> = function(props) {
  const [current, setCurrent] = useState<string>('/home/home'),
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
  useEffect(() => {
    const curr = pageList.find(item => item.key === history.location.pathname);
    curr?.key && setCurrent(curr?.key);
  }, []);
  function renderPages() {
    return pageList.map(item => {
      return <Menu.Item key={item.key}>{item.title}</Menu.Item>;
    });
  }
  function handleClick({ key }) {
    setCurrent(key);
    history.push(key);
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
