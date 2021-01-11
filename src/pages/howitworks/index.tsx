/**
 * @description 描述
 */
import React, { FC } from 'react';
import styles from './styles/index.less';
interface PropTypes {}
const HowItWork: FC<PropTypes> = function(props) {
  return <div className={styles['demo']}>HowItWork</div>;
};

export default HowItWork;
