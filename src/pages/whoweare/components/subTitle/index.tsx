/**
 * @description 描述
 */
import React, { FC } from 'react';
import styles from './styles/index.less';
interface PropTypes {}
const SubTitle: FC<PropTypes> = function({ children }) {
  return <div className={styles['sub-title']}>{children}</div>;
};

export default SubTitle;
