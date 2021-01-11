/**
 * @description 描述
 */
import React, { FC } from 'react';
import styles from './styles/index.less';
interface PropTypes {}
const STOList: FC<PropTypes> = function(props) {
  return <div className={styles['STO_list']}>STOList</div>;
};

export default STOList;
