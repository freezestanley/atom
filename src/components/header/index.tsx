/**
 * @description 描述
 */
import React, { FC, useState, useEffect } from 'react';
import { Button, Menu } from 'antd';
import { history, useIntl } from 'umi';
import styles from './styles/index.less';
const logo = require('./images/atom8_logo_1.png');
interface PropTypes {}
const Header: FC<PropTypes> = function(props) {
  const intl = useIntl(),
    [current, setCurrent] = useState<string>('/home/home'),
    pageList = [
      {
        key: '/home',
        title: intl.formatMessage({
          id: 'footer_home',
        }),
      },
      {
        key: '/stolist',
        title: intl.formatMessage({
          id: 'footer_stoprojects',
        }),
      },
      {
        key: '/howitworks',
        title: intl.formatMessage({
          id: 'footer_howitworks',
        }),
      },
      {
        key: '/whoweare',
        title: intl.formatMessage({
          id: 'footer_whoweare',
        }),
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
        <div className={styles['logo']}>
          <img src={logo} alt="" />
        </div>
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
