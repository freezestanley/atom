/**
 * @description 描述
 */
import React, { FC } from 'react';
import styles from './styles/index.less';
interface PropTypes {}
const Header: FC<PropTypes> = function(props) {
  return <div className={styles['footer']}>footer</div>;
};

export default Header;