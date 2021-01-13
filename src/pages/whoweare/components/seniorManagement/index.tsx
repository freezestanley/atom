/**
 * @description 描述
 */
import React, { FC } from 'react';
import styles from './styles/index.less';
const [linkedinIco, ...manageImgs] = [
  require('./images/linkedin.png'),
  require('./images/1.png'),
  require('./images/2.jpg'),
  require('./images/3.png'),
  require('./images/4.jpg'),
];
interface PropTypes {}
const SeniorManagement: FC<PropTypes> = function(props) {
  function renderItem() {
    const list = [
      {
        name: 'Ken Lo',
        desc:
          '10+ years of experience in global corporations and early stage startups, incl. HSBC, McKinsey, ZA International ',
      },
      {
        name: 'Xiaochuan Wu',
        desc:
          '8+ years of experience in blockchain and crypto assets development with leading tech companies incl. Huobi, ZhongAn ',
      },
      {
        name: 'Yue Cheng',
        desc:
          '15+ years of experience in software engineering with leading tech companies incl. Nokia, Blackberry, Arris ',
      },
      {
        name: 'Jonathan Cheung',
        desc:
          '10+ years of experience in product development and pricing in major financial institutions incl. Manulife, FWD, ZA International ',
      },
    ];
    return list.map((item, idx) => {
      return (
        <div className={styles['item']}>
          <div className={styles['img']}>
            <img src={manageImgs[idx]} alt="" />
          </div>
          <div className={styles['name']}>
            <span>{item.name}</span>
            <img src={linkedinIco} alt="" />
          </div>
          <div className={styles['desc']}>{item.desc}</div>
        </div>
      );
    });
  }
  return <div className={styles['senior_manage']}>{renderItem()}</div>;
};

export default SeniorManagement;
