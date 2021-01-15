/**
 * @description 描述
 */
import React, { FC } from 'react';
import { useIntl } from 'umi';
import ValueChart from '@/components/valueChart';
import styles from './styles/index.less';
import logo from './images/logo-hksi.png';

interface PropTypes { }
const Home: FC<PropTypes> = function (props) {
  const i18n = useIntl();
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
        <a className={styles.products_highlight}>
          {i18n.formatMessage({ id: 'home_products_choose_text_1' })}
        </a>
        <a>
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
    </section>
    <section className={styles.partners}>
      <h2>{i18n.formatMessage({ id: 'home_partners_head' })}</h2>
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
