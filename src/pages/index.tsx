import React, { FC } from 'react';
import { connect, useIntl, getLocale, setLocale, Helmet } from 'umi';
import { Button } from 'antd';
import '@/less/setting.less';
import Header from '@/components/header';
import Footer from '@/components/footer';
interface PropTypes {
  title: string;
}
const Home: FC<PropTypes> = props => {
  const { title } = props;
  console.log('renderd', title);
  const changeLangs = () => {
    const lang = getLocale();
    console.log('changeLangs', lang);
    const change = lang === 'zh-TW' ? 'en-US' : 'zh-TW';
    //     // 刷新页面
    // setLocale('zh-TW', true);
    // // 不刷新页面
    setLocale(change, false);
  };
  const intl = useIntl();
  return (
    <>
      <Header />
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {/* <div>asdfasdfasdf</div>
      <Helmet>
        <title>{title}</title>
      </Helmet> */}
      {/* <h2>
        {intl.formatMessage({
          id: 'umi',
        })}
      </h2>
      <Button onClick={changeLangs}>切换语言</Button> */}
      {props.children}
      <Footer />
    </>
  );
};
// @ts-ignore
Home.getInitialProps = async ({ store, isServer, history, match, route }) => {
  // console.log(ctx);
  if (!isServer) {
    return;
  }
  await store.dispatch({ type: 'global/test' });
  const { global } = store.getState();
  return { global };
};
// @ts-ignore
export default connect(({ global }) => ({ title: global.title }))(Home);
