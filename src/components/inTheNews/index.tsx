/**
 * @description 描述
 */
import React, { FC } from 'react';
import Carousel from 'react-slick';
import classnames from 'classnames';
import styles from './styles/index.less';
const [arrowImg] = [require('./images/arrow-right.png')];
const imgs = [
  require('./images/who_we_are_news_dummy1.png'),
  require('./images/who_we_are_news_dummy2.png'),
  require('./images/who_we_are_news_dummy3.png'),
];
interface PropTypes {}
interface ItemTypes {
  url: string;
  author: string;
  date: string;
  content: string;
}
const InTheNews: FC<PropTypes> = function(props) {
  const settings = {
      // autoplay
      //     autoplaySpeed={1500}
      //     dots={false}
      //     arrows
      //     prevArrow={arrow(true)}
      //     nextArrow={arrow()}
      //     lazyLoad={'progressive'}
      dots: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      prevArrow: arrow(true),
      nextArrow: arrow(),
      lazyLoad: 'progressive',
      // prevArrow: <CustomerArrow left />,
      // nextArrow: <CustomerArrow />,
    },
    mockList: ItemTypes[] = [
      {
        url: imgs[0],
        author: 'Sharon Lewis',
        date: '07 Dec 2020',
        content:
          'Hong Kong-based Virtual Asset Exchange HKbitEX Secures US$10M Series A2',
      },
      {
        url: imgs[1],
        author: 'HKET',
        date: ' 07 Dec 2020',
        content: 'HKbitEX完成1000萬美元融資　此前獲多名港交所前高層加入',
      },
      {
        url: imgs[2],
        author: '信報財經新聞',
        date: ' 03 Nov 2019',
        content: 'HKbitEX：7號金融牌申領門檻高',
      },
      {
        url: imgs[0],
        author: 'Sharon Lewis',
        date: '07 Dec 2020',
        content:
          'Hong Kong-based Virtual Asset Exchange HKbitEX Secures US$10M Series A2',
      },
      {
        url: imgs[1],
        author: 'HKET',
        date: ' 07 Dec 2020',
        content: 'HKbitEX完成1000萬美元融資　此前獲多名港交所前高層加入',
      },
      {
        url: imgs[2],
        author: '信報財經新聞',
        date: ' 03 Nov 2019',
        content: 'HKbitEX：7號金融牌申領門檻高',
      },
    ];
  function arrow(left?: true) {
    return (
      <div>
        <div
          className={classnames(styles['arrow'], {
            [styles['left']]: left,
          })}
        >
          <img src={arrowImg} alt="" />
        </div>
      </div>
    );
  }
  function renderList() {
    if (!Array.isArray(mockList)) return;
    return mockList.map((item, idx) => {
      // return <div>{idx}</div>;
      return <div className={styles['box']}>{renderItem(item)}</div>;
    });
  }
  function renderItem(item: ItemTypes) {
    return (
      <div className={styles['item']}>
        <img src={item.url} alt="" />
        <div className={styles['content']}>
          <section>
            By {item.author} | {item.date}
          </section>
          <section>{item.content}</section>
        </div>
      </div>
    );
  }
  return (
    <div className={styles['in_the_news']}>
      <Carousel
        // autoplay
        autoplaySpeed={3000}
        dots={false}
        arrows
        prevArrow={arrow(true)}
        nextArrow={arrow()}
        // lazyLoad={'progressive'}
        slidesToShow={3}
        slidesToScroll={3}
      >
        {renderList()}
      </Carousel>
    </div>
  );
};

export default InTheNews;
