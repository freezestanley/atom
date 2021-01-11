import React from 'react';
import { connect, useIntl, getLocale, setLocale, Helmet } from 'umi';
import { Button } from 'antd';
import Header from '@/components/header';
import Footer from '@/components/footer';

const Coming = props => {
  const { title } = props;
  console.log('renderd', title);
  const changeLangs = () => {
    const lang = getLocale();
    console.log('changeLangs', lang);
    const change = lang === 'zh-CN' ? 'en-US' : 'zh-CN';
    //     // 刷新页面
    // setLocale('zh-TW', true);
    // // 不刷新页面
    setLocale(change, false);
  };
  const intl = useIntl();
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};
Coming.getInitialProps = async ({ store, isServer, history, match, route }) => {
  // console.log(ctx);
  if (!isServer) {
    return;
  }
  await store.dispatch({ type: 'global/test' });
  const { global } = store.getState();
  return { global };
};
// @ts-ignore
export default connect(({ global }) => ({ title: global.title }))(Coming);
