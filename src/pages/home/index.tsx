/**
 * @description 描述
 */
import React, { FC } from 'react';
import styles from './styles/index.less';
interface PropTypes { }
const Home: FC<PropTypes> = function (props) {
  return <main className={styles.home}>
    <section className={styles.banner}>
      <h2>Enabling alternate avenue to Capital Markets:<br />Faster access to capital. Lower cost.</h2>
      <h3>Powering end-to-end Security Token Offering solutions.</h3>
      <a>GET IN TOUCH</a>
    </section>
    <section className={styles.highcosts}>
      <h2>Existing captial raising processes = high costs</h2>
      <ul>
        <li>
          <h3>Cumbersome<br/>regulations</h3>
          <p>Minimum profit threshold requirements and rigid shareholder structures</p>
        </li>
        <li>
          <h3>Ownership<br/>verification</h3>
          <p>Difficult to trace back and reach ultimate beneficial holders</p>
        </li>
        <li>
          <h3>Operational<br/>inefficiencies</h3>
          <p>Hefty fees paid to multiple intermediaries</p>
        </li>
        <li>
          <h3>Lengthy<br/>settlement</h3>
          <p>Public securities (T+2), private investments (can extend for months)</p>
        </li>
      </ul>
    </section>
    <section className={styles.values} />
    <section className={styles.why} />
    <section className={styles.advisory} />
    <section className={styles.products} />
    <section className={styles.partners} />
  </main>;
};

export default Home;
