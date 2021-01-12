/**
 * @description 描述
 */
import React, { FC } from 'react';
import styles from './styles/index.less';
import logo from './images/logo-hksi.png';

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
          <h3>Cumbersome<br />regulations</h3>
          <p>Minimum profit threshold requirements and rigid shareholder structures</p>
        </li>
        <li>
          <h3>Ownership<br />verification</h3>
          <p>Difficult to trace back and reach ultimate beneficial holders</p>
        </li>
        <li>
          <h3>Operational<br />inefficiencies</h3>
          <p>Hefty fees paid to multiple intermediaries</p>
        </li>
        <li>
          <h3>Lengthy<br />settlement</h3>
          <p>Public securities (T+2), private investments (can extend for months)</p>
        </li>
      </ul>
    </section>
    <section className={styles.values}>
      <h2>We DON’T displace! We build on the well-established capital market infrastructure in Hong Kong.</h2>
      <div className={styles.valuesbox}>
        <h3>A blockchain-powered platform that provides end-to-end STO solutions</h3>
      </div>
    </section>
    <section className={styles.why}>
      <h2>Why work with Atom 8?</h2>
      <ul>
        <li>
          <h3>Expertise</h3>
          <p>A full dedicated team (across Hong Kong and Shanghai) specializing in STOs, with expertise spanning across capital markets and blockchain​</p>
          <p>​We are ready to work with your issuing timeline!​</p>
        </li>
        <li>
          <h3>Future-proofed​</h3>
          <p>We prepare a clear pathway for listing (SFC compliant) from the moment you start structuring security tokens​</p>
        </li>
        <li>
          <h3>Security​</h3>
          <p>Audited by Big Four​</p>
          <p>Insurance coverage on security tokens</p><p>Capability in settling in both digital assets and fiat currencies locally in Hong Kong</p>
        </li>
        <li>
          <h3>Investment<br />opportunity​</h3>
          <p>A well funded early-stage digital asset company on the trajectory to future rounds of funding​</p>
        </li>
      </ul>
    </section>
    <section className={styles.advisory}>
      <h2>Advisory &amp; Tech Providers</h2>
      <div></div>
    </section>
    <section className={styles.products}>
      <h2>Our Products / Services</h2>
      <h3><a className={styles.products_highlight}>I want to issue security tokens</a><a>I want to invest in security tokens</a></h3>
      <h4>You are well covered with our end-to-end solutions.</h4>
      <ul>
        <li>
          <h5>STO Advisory</h5>
          <p>Token design</p>
          <p>Security assurance, adhering to global SOC 2 testing principles (security, availability, processing integrity, confidentiality, privacy)</p>
          <p>Payment and settlement logistics</p>
          <p>Insurance coverage (protection against criminal activities and physical damage)</p>
          <p>Corporate actions if any (mandatory and voluntary)</p>
          <p>We are ready to work with your issuing timeline!​</p>
        </li>
        <li>
          <h5>Security Token SaaS​</h5>
          <p>Security token creation</p>
          <p>Smart contract automation</p>
          <p>System integration with external systems required (Document signing, reporting)</p>
          <p>Security token stored at selected custodian(s)</p>
          <p>Data protection and cybersecurity solutions</p>
          <p>Token holder communication</p>
        </li>
        <li>
          <h5>Listing service</h5>
          <p>Consultation on scope of and assistance on due diligence required</p>
          <p>Drafting offer memorandum in connection to token listing on digital exchanges (i.e. minimize vetting time required)</p>
        </li>
      </ul>
    </section>
    <section className={styles.partners}>
      <h2>We work with industry-leading partners</h2>
      <div>
        <a>&lt;</a>
        <ul>
          <li><a><img src={logo} /></a></li>
          <li><a><img src={logo} /></a></li>
          <li><a><img src={logo} /></a></li>
          <li><a><img src={logo} /></a></li>
        </ul>
        <a>&gt;</a>
      </div>
    </section>
  </main>;
};

export default Home;
