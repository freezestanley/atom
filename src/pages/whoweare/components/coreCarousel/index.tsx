/**
 * @description 描述
 */
import React, { FC } from 'react';
import { Carousel } from 'antd';
import styles from './styles/index.less';
const imgs = [
  require('./images/Core_Values_1.png'),
  require('./images/Core_Values_2.png'),
  require('./images/Core_Values_3.png'),
  require('./images/Core_Values_4.png'),
  require('./images/Core_Values_5.png'),
];
interface PropTypes {}
const CoreCarousel: FC<PropTypes> = function(props) {
  function renderItem() {
    const texts = [
      'Excellence in everything we do.',
      'Passion to make meaningful change.',
      'One multicultural team',
      'Courage to innovate',
      'Human centric',
    ];
    return texts.map((text, idx) => {
      return (
        <div>
          <div className={styles['item']}>
            <img src={imgs[idx]} alt="" />
            <div className={styles['text']}>{text}</div>
          </div>
        </div>
      );
    });
  }
  return (
    <div className={styles['core-carousel']}>
      <Carousel
        autoplay
        autoplaySpeed={1500}
        dots={false}
        arrows
        lazyLoad={'progressive'}
      >
        {renderItem()}
      </Carousel>
    </div>
  );
};

export default CoreCarousel;
