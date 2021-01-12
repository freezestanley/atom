/**
 * @description 描述
 */
import React, { FC } from 'react';
import AddValues from './components/addValues';
import SubTitle from './components/subTitle';
import CoreCarousel from './components/coreCarousel';

import styles from './styles/index.less';
const [banner] = [require('./images/who_we_are_banner1.png')];
interface PropTypes {}

const WhoWeAre: FC<PropTypes> = function(props) {
  return (
    <div className={styles['whoweare']}>
      <div className={styles['banner']}>
        <img src={banner} alt="banner" />
      </div>
      <div className={styles['desc']}>
        <p>
          <b>Atom 8</b> Limited provides end-to-end Security Token Offering
          (STO) solutions to empower issuers to raise capital in a more
          efficient manner. It operates as a &nbsp;
          <b>blockchain-based workflow orchestration platform</b> servicing
          business clients, including sponsors (Hong Kong SFC RA6), issuers and
          digital custodians.
        </p>
        <p>
          Atom 8 Limited is an affiliate company to &nbsp;
          <b>Hong Kong Digital Asset Ex Ltd.</b> (HKbitEX), which operates the
          website www.hkbitex.com.hk offering custody and transaction of digital
          assets (cryptocurrencies and security tokens). HKbitEX is an applicant
          to SFC Type 1 & 7 licenses.
        </p>
      </div>
      <div className={styles['blockchain-powered']}>
        <div className={styles['blockchain-powered-bg']}></div>
        <div className={styles['card']}>
          <h3 className={styles['title']}>
            A blockchain-powered platform that provides end-to-end STO solutions
          </h3>
          {/* 我们的增值点 */}
          <AddValues />
          <div className={styles['card-tips']}>
            <section>Sponsors: SFC RA 6</section>
            <section>Brokers: SFC RA1 & 4</section>
          </div>
        </div>
      </div>
      <div className={styles['core-values']}>
        <SubTitle>Core Values</SubTitle>
        <CoreCarousel />
      </div>
      <div className={styles['senior-management']}></div>
      <div className={styles['latest-thinking']}></div>
      <div className={styles['our-investors']}></div>
      <div className={styles['in-the-news']}></div>
    </div>
  );
};

export default WhoWeAre;
