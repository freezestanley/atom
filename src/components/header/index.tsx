/**
 * @description 描述
 */
import React, { FC, useState, useEffect } from 'react';
import { Button, Menu } from 'antd';
import { connect, useIntl, getLocale, setLocale, Helmet, history } from 'umi';
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

  const changeLangs = (language: String) => {
    const change = language === 'tw' ? 'en-US' : 'zh-TW';
    setLocale(change, false);
  };

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
        <Button type="primary">
          {intl.formatMessage({
            id: 'header_get_in_touch',
          })}
        </Button>
        <ul className={styles['language']}>
          <li onClick={() => changeLangs('tw')}>En</li>
          <li onClick={() => changeLangs('en')}>繁</li>
          {/* <li onClick={ () => changeLangs('cn') }>中</li> */}
        </ul>
      </header>
    </div>
  );
};

export default Header;
