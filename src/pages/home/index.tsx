/**
 * @description 描述
 */
import React, { FC } from 'react';
import { useIntl } from 'umi';
import ValueChart from '@/components/valueChart';
import styles from './styles/index.less';

import prev from './images/icon-arrow-prev.svg';
import next from './images/icon-arrow-next.svg';

import aws from './images/logo-aws.svg';
import boarderless from './images/logo-boarderless.png';
import cbc from './images/logo-cbc.png';
import ccb from './images/logo-ccb.png';
import cyberport from './images/logo-cyberport.png';
import deloitte from './images/logo-deloitte.svg';
import draper from './images/logo-draper.png';
import edv from './images/logo-edv.png';
import elliptic from './images/logo-elliptic.svg';
import ftahk from './images/logo-ftahk.png';
import hanwha from './images/logo-hanwha.png';
import hkbitex from './images/logo-hkbitex.png';
import hksi from './images/logo-hksi.png';
import hku from './images/logo-hku.svg';
import king from './images/logo-king.png';
import kpmg from './images/logo-kpmg.svg';
import kwm from './images/logo-kwm.png';
import ledger from './images/logo-ledger.svg';
import lenovo from './images/logo-lenovo.png';
import lingfeung from './images/logo-lingfeung.png';
import lloyds from './images/logo-lloyds.svg';
import nasdaq from './images/logo-nasdaq.svg';
import qbn from './images/logo-qbn.png';
import refinitiv from './images/logo-refinitiv.png';
import signature from './images/logo-signature.png';

const logos = {
  aws, boarderless, cbc, ccb, cyberport,
  deloitte, draper, edv, elliptic, ftahk,
  hanwha, hkbitex, hksi, hku, king,
  kpmg, kwm, ledger, lenovo, lingfeung,
  lloyds, nasdaq, qbn, refinitiv, signature
};

interface PropTypes { }
const Home: FC<PropTypes> = function (props) {
  const i18n = useIntl();

  let index = 0;

  const slideNext = e => {
    const container = e.target.parentNode.parentNode.getElementsByTagName('div')[0];
    const templates = container.getElementsByTagName('p');
    const size = templates.length;

    const [background, foreground] = container.getElementsByTagName('ul');
    const slidersOfForeground = foreground.getElementsByTagName('li');
    const slidersOfBackground = background.getElementsByTagName('li');

    slidersOfBackground[0].innerHTML = templates[index - 1 < 0 ? index - 1 + size : index - 1].innerHTML;
    slidersOfBackground[1].innerHTML = templates[index].innerHTML;
    slidersOfBackground[2].innerHTML = templates[index + 1 > size - 1 ? index + 1 - size : index + 1].innerHTML;
    foreground.style.display = 'none';
    templates[0].style.display = 'none';

    index = index + 1 > size - 1 ? index + 1 - size : index + 1;
    slidersOfForeground[1].innerHTML = templates[index].innerHTML;

    background.className = styles.next;
    setTimeout(() => {
      foreground.style.display = 'flex';
      background.className = '';
    }, 400);
  }

  const slidePrev = e => {
    const container = e.target.parentNode.parentNode.getElementsByTagName('div')[0];
    const templates = container.getElementsByTagName('p');
    const size = templates.length;

    const [background, foreground] = container.getElementsByTagName('ul');
    const slidersOfForeground = foreground.getElementsByTagName('li');
    const slidersOfBackground = background.getElementsByTagName('li');

    slidersOfBackground[0].innerHTML = templates[index - 1 < 0 ? index - 1 + size : index - 1].innerHTML;
    slidersOfBackground[1].innerHTML = templates[index].innerHTML;
    slidersOfBackground[2].innerHTML = templates[index + 1 > size - 1 ? index + 1 - size : index + 1].innerHTML;
    foreground.style.display = 'none';
    templates[0].style.display = 'none';

    index = index - 1 < 0 ? index - 1 + size : index - 1;
    slidersOfForeground[1].innerHTML = templates[index].innerHTML;

    background.className = styles.prev;
    setTimeout(() => {
      foreground.style.display = 'flex';
      background.className = '';
    }, 400);
  }

  const openIssueDialog = e => {
    const section = e.target.parentNode.parentNode;
    section.classList.remove(styles.invest);
  }

  const openInvestDialog = e => {
    const section = e.target.parentNode.parentNode;
    section.classList.add(styles.invest);
  }

  return <main className={styles.home}>
    <section className={styles.banner}>
      <h2>{i18n.formatMessage({ id: 'home_banner_head1' })}</h2>
      <h2>{i18n.formatMessage({ id: 'home_banner_head2' })}</h2>
      <h3>{i18n.formatMessage({ id: 'home_banner_text' })}</h3>
      <a>{i18n.formatMessage({ id: 'home_getintouch' })}</a>
    </section>
    <section className={styles.highcosts}>
      <h2>{i18n.formatMessage({ id: 'home_costs_head' })}</h2>
      <ul>
        <li>
          <h3>
            {i18n.formatMessage({ id: 'home_costs_item_head_1_1' })}
            <br />
            {i18n.formatMessage({ id: 'home_costs_item_head_1_2' })}
          </h3>
          <p>{i18n.formatMessage({ id: 'home_costs_item_text_1' })}</p>
        </li>
        <li>
          <h3>
            {i18n.formatMessage({ id: 'home_costs_item_head_2_1' })}
            <br />
            {i18n.formatMessage({ id: 'home_costs_item_head_2_2' })}
          </h3>
          <p>{i18n.formatMessage({ id: 'home_costs_item_text_2' })}</p>
        </li>
        <li>
          <h3>
            {i18n.formatMessage({ id: 'home_costs_item_head_3_1' })}
            <br />
            {i18n.formatMessage({ id: 'home_costs_item_head_3_2' })}
          </h3>
          <p>{i18n.formatMessage({ id: 'home_costs_item_text_3' })}</p>
        </li>
        <li>
          <h3>
            {i18n.formatMessage({ id: 'home_costs_item_head_4_1' })}
            <br />
            {i18n.formatMessage({ id: 'home_costs_item_head_4_2' })}
          </h3>
          <p>{i18n.formatMessage({ id: 'home_costs_item_text_4' })}</p>
        </li>
      </ul>
    </section>
    <section className={styles.values}>
      <h2>{i18n.formatMessage({ id: 'home_values_head' })}</h2>
      <ValueChart />
    </section>
    <section className={styles.why}>
      <h2>{i18n.formatMessage({ id: 'home_why_head' })}</h2>
      <ul>
        <li>
          <h3>{i18n.formatMessage({ id: 'home_why_item_head_1' })}</h3>
          <p>{i18n.formatMessage({ id: 'home_why_item_text_1_1' })}</p>
          <p>{i18n.formatMessage({ id: 'home_why_item_text_1_2' })}</p>
        </li>
        <li>
          <h3>{i18n.formatMessage({ id: 'home_why_item_head_2' })}</h3>
          <p>{i18n.formatMessage({ id: 'home_why_item_text_2_1' })}</p>
        </li>
        <li>
          <h3>{i18n.formatMessage({ id: 'home_why_item_head_3' })}</h3>
          <p>{i18n.formatMessage({ id: 'home_why_item_text_3_1' })}</p>
          <p>{i18n.formatMessage({ id: 'home_why_item_text_3_2' })}</p>
          <p>{i18n.formatMessage({ id: 'home_why_item_text_3_3' })}</p>
        </li>
        <li>
          <h3>{i18n.formatMessage({ id: 'home_why_item_head_4' })}</h3>
          <p>{i18n.formatMessage({ id: 'home_why_item_text_4_1' })}</p>
        </li>
      </ul>
    </section>
    <section className={styles.advisory}>
      <h2>{i18n.formatMessage({ id: 'home_advisory_head' })}</h2>
      <div>
        <h3>{i18n.formatMessage({ id: 'home_advisory_text_1' })}</h3>
        <h3>{i18n.formatMessage({ id: 'home_advisory_text_2' })}</h3>
        <h3>{i18n.formatMessage({ id: 'home_advisory_text_3' })}</h3>
        <h3>{i18n.formatMessage({ id: 'home_advisory_text_4' })}</h3>
        <h3>{i18n.formatMessage({ id: 'home_advisory_text_5' })}</h3>
        <h3>{i18n.formatMessage({ id: 'home_advisory_text_6' })}</h3>
        <h4>{i18n.formatMessage({ id: 'home_advisory_text_7' })}</h4>
        <h4>{i18n.formatMessage({ id: 'home_advisory_text_8' })}</h4>
      </div>
    </section>
    <section className={styles.products}>
      <h2>{i18n.formatMessage({ id: 'home_products_head' })}</h2>
      <div>
        <a onClick={openIssueDialog}>
          {i18n.formatMessage({ id: 'home_products_choose_text_1' })}
        </a>
        <a onClick={openInvestDialog}>
          {i18n.formatMessage({ id: 'home_products_choose_text_2' })}
        </a>
      </div>
      <h4>{i18n.formatMessage({ id: 'home_products_text' })}</h4>
      <ul>
        <li>
          <h5>{i18n.formatMessage({ id: 'home_products_item_head_1' })}</h5>
          <p className={styles.list}>{i18n.formatMessage({ id: 'home_products_item_text_1_1' })}</p>
          <p className={styles.list}>{i18n.formatMessage({ id: 'home_products_item_text_1_2' })}</p>
          <p className={styles.list}>{i18n.formatMessage({ id: 'home_products_item_text_1_3' })}</p>
          <p className={styles.list}>{i18n.formatMessage({ id: 'home_products_item_text_1_4' })}</p>
          <p className={styles.list}>{i18n.formatMessage({ id: 'home_products_item_text_1_5' })}</p>
        </li>
        <li>
          <h5>{i18n.formatMessage({ id: 'home_products_item_head_2' })}</h5>
          <p className={styles.list}>{i18n.formatMessage({ id: 'home_products_item_text_2_1' })}</p>
          <p className={styles.list}>{i18n.formatMessage({ id: 'home_products_item_text_2_2' })}</p>
          <p className={styles.list}>{i18n.formatMessage({ id: 'home_products_item_text_2_3' })}</p>
          <p className={styles.list}>{i18n.formatMessage({ id: 'home_products_item_text_2_4' })}</p>
          <p className={styles.list}>{i18n.formatMessage({ id: 'home_products_item_text_2_5' })}</p>
          <p className={styles.list}>{i18n.formatMessage({ id: 'home_products_item_text_2_6' })}</p>
        </li>
        <li>
          <h5>{i18n.formatMessage({ id: 'home_products_item_head_3' })}</h5>
          <p className={styles.list}>{i18n.formatMessage({ id: 'home_products_item_text_3_1' })}</p>
          <p className={styles.list}>{i18n.formatMessage({ id: 'home_products_item_text_3_2' })}</p>
        </li>
      </ul>
      <article>
        <img src={logos.hkbitex} />
        <a>{i18n.formatMessage({ id: 'home_products_invest_subscribe' })}</a>
        <p>{i18n.formatMessage({ id: 'home_products_invest_comment' })}</p>
      </article>
    </section>
    <section className={styles.partners}>
      <h2>{i18n.formatMessage({ id: 'home_partners_head' })}</h2>
      <aside>
        <a className={styles.button} onClick={slidePrev}><img src={prev} /></a>
        <div>
          <ul><li /><li /><li /></ul>
          <ul><li /><li /><li /></ul>
          <p>
            <a href="#"><img className={styles.hksi} src={logos.hksi} /></a>
            <a href="#"><img className={styles.ftahk} src={logos.ftahk} /></a>
            <a href="#"><img className={styles.hku} src={logos.hku} /></a>
            <a href="#"><img className={styles.deloitte} src={logos.deloitte} /></a>
          </p>
          <p>
            <a href="#"><img className={styles.nasdaq} src={logos.nasdaq} /></a>
            <a href="#"><img className={styles.qbn} src={logos.qbn} /></a>
            <a href="#"><img className={styles.refinitiv} src={logos.refinitiv} /></a>
            <a href="#"><img className={styles.signature} src={logos.signature} /></a>
          </p>
          <p>
            <a href="#"><img className={styles.aws} src={logos.aws} /></a>
            <a href="#"><img className={styles.boarderless} src={logos.boarderless} /></a>
            <a href="#"><img className={styles.cbc} src={logos.cbc} /></a>
            <a href="#"><img className={styles.ccb} src={logos.ccb} /></a>
            <a href="#"><img className={styles.cyberport} src={logos.cyberport} /></a>
          </p>
          <p>
            <a href="#"><img className={styles.ledger} src={logos.ledger} /></a>
            <a href="#"><img className={styles.lenovo} src={logos.lenovo} /></a>
            <a href="#"><img className={styles.lingfeung} src={logos.lingfeung} /></a>
            <a href="#"><img className={styles.lloyds} src={logos.lloyds} /></a>
          </p>
          <p>
            <a href="#"><img className={styles.hkbitex} src={logos.hkbitex} /></a>
            <a href="#"><img className={styles.king} src={logos.king} /></a>
            <a href="#"><img className={styles.kpmg} src={logos.kpmg} /></a>
            <a href="#"><img className={styles.kwm} src={logos.kwm} /></a>
          </p>
          <p>
            <a href="#"><img className={styles.draper} src={logos.draper} /></a>
            <a href="#"><img className={styles.edv} src={logos.edv} /></a>
            <a href="#"><img className={styles.elliptic} src={logos.elliptic} /></a>
            <a href="#"><img className={styles.hanwha} src={logos.hanwha} /></a>
          </p>
        </div>
        <a className={styles.button} onClick={slideNext}><img src={next} /></a>
      </aside>
    </section>
  </main>;
};

export default Home;
