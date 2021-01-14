/**
 * @description 描述
 */
import React, { FC } from 'react';
import { useIntl } from 'umi';
import styles from './styles/index.less';

interface PropTypes { }
const HowItWork: FC<PropTypes> = function (props) {
  const i18n = useIntl();
  return <main className={styles.howitworks}>
    <section className={styles.banner}></section>
    <section className={styles.offerings}>
      <div>
        <h2>{i18n.formatMessage({ id: 'how_banner_head_1' })}<br />{i18n.formatMessage({ id: 'how_banner_head_2' })}</h2>
        <p>{i18n.formatMessage({ id: 'how_banner_text' })}</p>
        <aside>{i18n.formatMessage({ id: 'how_illustrative' })}</aside>
      </div>
    </section>
    <section className={styles.factors}>
      <ul>
        <li>
          <h2>{i18n.formatMessage({ id: 'how_assets_item_head_1' })}</h2>
          <p>{i18n.formatMessage({ id: 'how_assets_item_text_1_1' })}</p>
          <p>{i18n.formatMessage({ id: 'how_assets_item_text_1_2' })}</p>
          <p>{i18n.formatMessage({ id: 'how_assets_item_text_1_3' })}</p>
          <p>{i18n.formatMessage({ id: 'how_assets_item_text_1_4' })}</p>
        </li>
        <li>
          <h2>{i18n.formatMessage({ id: 'how_assets_item_head_2' })}</h2>
          <p>{i18n.formatMessage({ id: 'how_assets_item_text_2_1' })}</p>
          <p>{i18n.formatMessage({ id: 'how_assets_item_text_2_2' })}</p>
          <p>{i18n.formatMessage({ id: 'how_assets_item_text_2_3' })}</p>
        </li>
        <li>
          <h2>{i18n.formatMessage({ id: 'how_assets_item_head_3' })}</h2>
          <p>{i18n.formatMessage({ id: 'how_assets_item_text_3_1' })}</p>
          <p>{i18n.formatMessage({ id: 'how_assets_item_text_3_2' })}</p>
          <p>{i18n.formatMessage({ id: 'how_assets_item_text_3_3' })}</p>
        </li>
        <li>
          <h2>{i18n.formatMessage({ id: 'how_assets_item_head_4' })}</h2>
          <p>{i18n.formatMessage({ id: 'how_assets_item_text_4_1' })}</p>
          <p>{i18n.formatMessage({ id: 'how_assets_item_text_4_2' })}</p>
          <p>{i18n.formatMessage({ id: 'how_assets_item_text_4_3' })}</p>
          <p>{i18n.formatMessage({ id: 'how_assets_item_text_4_4' })}</p>
          <p>{i18n.formatMessage({ id: 'how_assets_item_text_4_5' })}</p>
          <p>{i18n.formatMessage({ id: 'how_assets_item_text_4_6' })}</p>
        </li>
      </ul>
    </section>
    <section className={styles.benefits}>
      <h2>{i18n.formatMessage({ id: 'how_sto_head' })}</h2>
      <h4>{i18n.formatMessage({ id: 'how_sto_text' })}</h4>
      <ul>
        <li>{i18n.formatMessage({ id: 'how_sto_step_1' })}</li>
        <li>{i18n.formatMessage({ id: 'how_sto_step_2' })}</li>
        <li>{i18n.formatMessage({ id: 'how_sto_step_3' })}</li>
      </ul>
      <aside>
        <div>
          <h3>{i18n.formatMessage({ id: 'how_sto_item_head_1' })}​</h3>
          <p>{i18n.formatMessage({ id: 'how_sto_item_text_1' })}</p>
        </div>
        <div>
          <h3>{i18n.formatMessage({ id: 'how_sto_item_head_2' })}​</h3>
          <p>{i18n.formatMessage({ id: 'how_sto_item_text_2' })}</p>
        </div>
        <div>
          <h3>{i18n.formatMessage({ id: 'how_sto_item_head_3' })}​</h3>
          <p>{i18n.formatMessage({ id: 'how_sto_item_text_3' })}</p>
        </div>
        <div>
          <h3>{i18n.formatMessage({ id: 'how_sto_item_head_4' })}​</h3>
          <p>{i18n.formatMessage({ id: 'how_sto_item_text_4' })}</p>
        </div>
        <div>
          <h3>{i18n.formatMessage({ id: 'how_sto_item_head_5' })}​</h3>
          <p>{i18n.formatMessage({ id: 'how_sto_item_text_5' })}</p>
        </div>
        <div>
          <h3>{i18n.formatMessage({ id: 'how_sto_item_head_6' })}<br />{i18n.formatMessage({ id: 'how_sto_item_head_6_2' })}​</h3>
          <p>{i18n.formatMessage({ id: 'how_sto_item_text_6' })}</p>
        </div>
      </aside>
    </section>
    <section className={styles.faq}>
      <h2>{i18n.formatMessage({ id: 'how_faq_head' })}</h2>
      <div>
        <aside>
          <h3>For issuers / sponsors</h3>
          <ul>
            <li className={styles.open}>
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
            <li className={styles.open}>
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
      <h2>{i18n.formatMessage({ id: 'how_academy_head' })}</h2>
      <div>
        <aside>
          <h3>For issuers / sponsors</h3>
          <ul>
            <li className={styles.open}>
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
