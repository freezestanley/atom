/**
 * @description 描述
 */
import React, { FC } from 'react';
import styles from './styles/index.less';
interface PropTypes {}
const WhoWeAre: FC<PropTypes> = function(props) {
  return <div className={styles['demo']}>WhoWeAre</div>;
};

export default WhoWeAre;
