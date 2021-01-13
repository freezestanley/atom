/**
 * @description 轮播图设置
 */
import React, { FC } from 'react';
import classnames from 'classnames';
import styles from './styles/index.less';
const [arrowImg] = [require('./images/arrow-right.png')];
interface PropTypes {
  left?: boolean;
}
const CustomerArrow: FC<PropTypes> = function({ left }) {
  return (
    <div>
      <div className={styles['customerArrow']}>
        <div
          className={classnames(styles['arrow'], {
            [styles['left']]: left,
          })}
        >
          <img src={arrowImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CustomerArrow;
