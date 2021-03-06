/**
 * @description 描述
 */
import React, { FC } from 'react';
import ValueChart from '@/components/valueChart';
import SubTitle from './components/subTitle';
import CoreCarousel from './components/coreCarousel';
import SeniorManagement from './components/seniorManagement';
import LatestThinking from './components/latestThinking';
import InTheNews from '@/components/inTheNews';

import styles from './styles/index.less';
const [banner] = [require('./images/who_we_are_banner1.png')];
const investors = [
  require('./images/investors/1_1.png'),
  require('./images/investors/1_2.png'),
  require('./images/investors/1_3.png'),
  require('./images/investors/2_1.png'),
  require('./images/investors/2_2.png'),
  require('./images/investors/2_3.png'),
  require('./images/investors/2_4.png'),
];
interface PropTypes { }

const WhoWeAre: FC<PropTypes> = function (props) {
  return (
    <div className={styles['whoweare']}>
      <div className={styles['banner']}>
        <img src={banner} alt="banner" />
      </div>
      <div className={styles['container']}>
        <div className={styles['desc']}>
          <p>
            <b>Atom 8</b> Limited provides end-to-end Security Token Offering
            (STO) solutions to empower issuers to raise capital in a more
            efficient manner. It operates as a &nbsp;
            <b>blockchain-based workflow orchestration platform</b> servicing
            business clients, including sponsors (Hong Kong SFC RA6), issuers
            and digital custodians.
          </p>
          <p>
            Atom 8 Limited is an affiliate company to &nbsp;
            <b>Hong Kong Digital Asset Ex Ltd.</b> (HKbitEX), which operates the
            website www.hkbitex.com.hk offering custody and transaction of
            digital assets (cryptocurrencies and security tokens). HKbitEX is an
            applicant to SFC Type 1 & 7 licenses.
          </p>
        </div>
        <div className={styles['blockchain-powered']}>
          <ValueChart />
        </div>
        <div className={styles['core-values']}>
          <SubTitle>Core Values</SubTitle>
          <CoreCarousel />
        </div>
        <div className={styles['senior-management']}>
          <SubTitle>Senior Management</SubTitle>
          <SeniorManagement />
        </div>
        <div className={styles['latest-thinking']}>
          <SubTitle>Check Out Our Latest Thinking</SubTitle>
          <LatestThinking />
        </div>
        <div className={styles['our-investors']}>
          <SubTitle>Our Investors</SubTitle>
          <section>
            <img src={investors[0]} alt="" />
            <img src={investors[1]} alt="" />
            <img src={investors[2]} alt="" />
          </section>
          <section>
            <img src={investors[3]} alt="" />
            <img src={investors[4]} alt="" />
            <img src={investors[5]} alt="" />
            <img src={investors[6]} alt="" />
          </section>
        </div>
        <div className={styles['in-the-news']}>
          <SubTitle>In the News</SubTitle>
          <InTheNews />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
