/**
 * @description 描述
 */
import React, { FC } from 'react';
import classnames from 'classnames';
import styles from './styles/index.less';
const addValueImgs = [
  require('../../images/Issuers.png'),
  require('../../images/Product structuring.png'),
  require('../../images/Token creation.png'),
  require('../../images/Distribution.png'),
  require('../../images/Investors.png'),
];
interface PropTypes {}
interface AddValueItemTypes {
  border?: boolean;
  title: string;
  liTexts?: string[];
  desc?: string;
}
const AddValues: FC<PropTypes> = function(props) {
  function renderAddValueItem() {
    const values: AddValueItemTypes[] = [
      {
        border: true,
        title: 'Issuers​',
        liTexts: ['Equity​', 'Debt​', 'Real estate​', 'Fine arts​', 'etc.​'],
      },
      {
        title: 'Product structuring​',
        desc: 'Token Economics Advisory',
      },

      {
        title: 'Token creation ',
      },
      {
        title: 'Distribution​',
        desc: 'Post-issuance Token Management',
      },
      {
        border: true,
        title: 'Investors​',
      },
    ];
    return values.map((item, idx) => {
      return (
        <div className={styles['item']}>
          <div
            className={classnames(styles['icon'], {
              [styles['border']]: item.border,
            })}
          >
            <img src={addValueImgs[idx]} />
          </div>
          <section className={styles['title']}>{item.title}</section>
          <ul>{renderLis(item.liTexts)}</ul>
          <section>{item.desc}</section>
        </div>
      );
    });
  }
  function renderLis(lis: AddValueItemTypes['liTexts']) {
    if (!Array.isArray(lis)) return;
    return lis.map(l => {
      return <li>{l}</li>;
    });
  }
  return (
    <div className={styles['add-value-box']}>
      {/* 线 */}
      <div className={styles['line']}></div>
      {/* 黄色背景板 */}
      <div className={styles['bg']}></div>
      <div className={styles['content']}>{renderAddValueItem()}</div>
    </div>
  );
};

export default AddValues;
