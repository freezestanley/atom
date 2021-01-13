/**
 * @description 描述
 */
import React, { FC } from 'react';
import styles from './styles/index.less';
interface PropTypes { }
const HowItWork: FC<PropTypes> = function (props) {
  return <main className={styles.howitworks}>
    <section className={styles.banner}></section>
    <section className={styles.offerings}>
      <div>
        <h2>What are STOs - <br />Security Token Offerings</h2>
        <p>Security Tokens are digital representations of ownership of assets or economic rights, created via blockchain technology. They are widely regulated as securities in major jurisdictions worldwide.</p>
        <aside>Underlying assets (illustrative)</aside>
      </div>
    </section>
    <section className={styles.factors}>
      <ul>
        <li>
          <h2>Equity</h2>
          <p>Common shares</p>
          <p>Preferred shares</p>
          <p>Voting, non-voting shares</p>
          <p>REIT shares</p>
        </li>
        <li>
          <h2>Debt</h2>
          <p>Bonds</p>
          <p>Asset Backed Securities</p>
          <p>Sustainability-linked green financing projects (e.g. green financing)</p>
        </li>
        <li>
          <h2>Fund</h2>
          <p>Mutual fund </p>
          <p>Hedge fund</p>
          <p>Private Equity fund</p>
        </li>
        <li>
          <h2>Alternative assets</h2>
          <p>Real properties, real estate</p>
          <p>Intellectual Property rights</p>
          <p>Fine arts</p>
          <p>Fine wine</p>
          <p>Diamonds</p>
          <p>Etc.</p>
        </li>
      </ul>
    </section>
    <section className={styles.benefits}>
      <h2>STOs present unprecedented benefits to issuers and investors</h2>
      <h4>Similar to traditional securities offering, but streamlined via digitization</h4>
      <ul>
        <li>Pre-Issue Advisory​</li>
        <li>Token Creation​</li>
        <li>Token Management &amp; Trading​</li>
      </ul>
      <aside>
        <div>
          <h3>Engage professionals​</h3>
          <p>Financial advisors, legal counsel, tax advisor, STO advisor, listing venue​</p>
        </div>
        <div>
          <h3>Tokenization​</h3>
          <p>Rules (e.g. selling restrictions, market scenarios) coded on smart contracts</p>
        </div>
        <div>
          <h3>Corporate actions</h3>
          <p>Automated dividend/ interest distribution (asset specific)​</p>
        </div>
        <div>
          <h3>Structuring</h3>
          <p>Legal, tax and accounting issues in different jurisdictions​</p>
        </div>
        <div>
          <h3>Issuance</h3>
          <p>Security tokens issued to qualified investors (T+0 near-instant settlement)</p>
        </div>
        <div>
          <h3>Secondary<br />trading​</h3>
          <p>24/7 market access​</p>
        </div>
      </aside>
    </section>
    <section className={styles.faq}>
      <h2>FAQs</h2>
      <div>
        <aside>
          <h3>For issuers / sponsors</h3>
          <ul>
            <li>
              <h4>Is Atom 8 licensed?</h4>
              <p>Atom 8 is a technology solution provider for SFC Regulated Activities (RA) licensees and Issuers. We don’t advise on corporate finance nor deal in securities.</p>
            </li>
            <li>
              <h4>Is Atom 8 licensed?</h4>
              <p>Atom 8 is a technology solution provider for SFC Regulated Activities (RA) licensees and Issuers. We don’t advise on corporate finance nor deal in securities.</p>
            </li>
            <li>
              <h4>Is Atom 8 licensed?</h4>
              <p>Atom 8 is a technology solution provider for SFC Regulated Activities (RA) licensees and Issuers. We don’t advise on corporate finance nor deal in securities.</p>
            </li>
          </ul>
        </aside>
        <aside>
          <h3>For issuers / sponsors</h3>
          <ul>
            <li>
              <h4>Is Atom 8 licensed?</h4>
              <p>Atom 8 is a technology solution provider for SFC Regulated Activities (RA) licensees and Issuers. We don’t advise on corporate finance nor deal in securities.</p>
            </li>
            <li>
              <h4>Is Atom 8 licensed?</h4>
              <p>Atom 8 is a technology solution provider for SFC Regulated Activities (RA) licensees and Issuers. We don’t advise on corporate finance nor deal in securities.</p>
            </li>
            <li>
              <h4>Is Atom 8 licensed?</h4>
              <p>Atom 8 is a technology solution provider for SFC Regulated Activities (RA) licensees and Issuers. We don’t advise on corporate finance nor deal in securities.</p>
            </li>
          </ul>
        </aside>
        <div></div>
      </div>
    </section>
    <section className={styles.academy}>
      <h2>STO Academy</h2>
      <div>
        <aside>
          <h3>For issuers / sponsors</h3>
          <ul>
            <li>
              <h4>Is Atom 8 licensed?</h4>
              <p>Atom 8 is a technology solution provider for SFC Regulated Activities (RA) licensees and Issuers. We don’t advise on corporate finance nor deal in securities.</p>
            </li>
            <li>
              <h4>Is Atom 8 licensed?</h4>
              <p>Atom 8 is a technology solution provider for SFC Regulated Activities (RA) licensees and Issuers. We don’t advise on corporate finance nor deal in securities.</p>
            </li>
            <li>
              <h4>Is Atom 8 licensed?</h4>
              <p>Atom 8 is a technology solution provider for SFC Regulated Activities (RA) licensees and Issuers. We don’t advise on corporate finance nor deal in securities.</p>
            </li>
          </ul>
        </aside>
        <aside>
          <h3>For issuers / sponsors</h3>
          <ul>
            <li>
              <h4>Is Atom 8 licensed?</h4>
              <p>Atom 8 is a technology solution provider for SFC Regulated Activities (RA) licensees and Issuers. We don’t advise on corporate finance nor deal in securities.</p>
            </li>
            <li>
              <h4>Is Atom 8 licensed?</h4>
              <p>Atom 8 is a technology solution provider for SFC Regulated Activities (RA) licensees and Issuers. We don’t advise on corporate finance nor deal in securities.</p>
            </li>
            <li>
              <h4>Is Atom 8 licensed?</h4>
              <p>Atom 8 is a technology solution provider for SFC Regulated Activities (RA) licensees and Issuers. We don’t advise on corporate finance nor deal in securities.</p>
            </li>
          </ul>
        </aside>
        <div></div>
      </div>
    </section>
  </main>;
};

export default HowItWork;
