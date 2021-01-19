/**
 * @description 描述
 */
import React, { FC } from 'react';
import { useIntl } from 'umi';
import styles from './styles/index.less';

interface PropTypes { }
const HowItWork: FC<PropTypes> = function (props) {
  const i18n = useIntl();

  /**
   * 将国际化配置文件中的字符串，转义加粗
   * @param source 
   */
  function format(source) {
    const ret = source.match(/\[b\][\S\s]+?\[\/b\]/)
    if (ret) {
      const tag = ret[0];
      const pos = ret.index;
      return (<>
        {source.substring(0, pos)}
        <strong>{tag.substr(3, tag.length - 7)}</strong>
        {format(source.substr(pos + tag.length))}
      </>)
    }
    else {
      return source;
    }
  }

  const toggle = e => {
    const current = e.target;
    const parent = current ? current.parentNode : null;
    parent && parent.classList.toggle(styles.open);
  }

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
          <h3>{i18n.formatMessage({ id: 'how_assets_item_head_1' })}</h3>
          <p>{i18n.formatMessage({ id: 'how_assets_item_text_1_1' })}</p>
          <p>{i18n.formatMessage({ id: 'how_assets_item_text_1_2' })}</p>
          <p>{i18n.formatMessage({ id: 'how_assets_item_text_1_3' })}</p>
          <p>{i18n.formatMessage({ id: 'how_assets_item_text_1_4' })}</p>
        </li>
        <li>
          <h3>{i18n.formatMessage({ id: 'how_assets_item_head_2' })}</h3>
          <p>{i18n.formatMessage({ id: 'how_assets_item_text_2_1' })}</p>
          <p>{i18n.formatMessage({ id: 'how_assets_item_text_2_2' })}</p>
          <p>{i18n.formatMessage({ id: 'how_assets_item_text_2_3' })}</p>
        </li>
        <li>
          <h3>{i18n.formatMessage({ id: 'how_assets_item_head_3' })}</h3>
          <p>{i18n.formatMessage({ id: 'how_assets_item_text_3_1' })}</p>
          <p>{i18n.formatMessage({ id: 'how_assets_item_text_3_2' })}</p>
          <p>{i18n.formatMessage({ id: 'how_assets_item_text_3_3' })}</p>
        </li>
        <li>
          <h3>{i18n.formatMessage({ id: 'how_assets_item_head_4' })}</h3>
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
      <h5>{i18n.formatMessage({ id: 'how_sto_text' })}</h5>
      <ul>
        <li>{i18n.formatMessage({ id: 'how_sto_step_1' })}</li>
        <li>{i18n.formatMessage({ id: 'how_sto_step_2' })}</li>
        <li>{i18n.formatMessage({ id: 'how_sto_step_3' })}</li>
      </ul>
      <aside>
        <div>
          <div>
            <h4>{i18n.formatMessage({ id: 'how_sto_item_head_1' })}​</h4>
            <p>{i18n.formatMessage({ id: 'how_sto_item_text_1' })}</p>
          </div>
          <div>
            <h4>{i18n.formatMessage({ id: 'how_sto_item_head_2' })}​</h4>
            <p>{format(i18n.formatMessage({ id: 'how_sto_item_text_2' }))}</p>
          </div>
          <div>
            <h4>{i18n.formatMessage({ id: 'how_sto_item_head_3' })}​</h4>
            <p>{format(i18n.formatMessage({ id: 'how_sto_item_text_3' }))}</p>
          </div>
          <div>
            <h4>{i18n.formatMessage({ id: 'how_sto_item_head_4' })}​</h4>
            <p>{i18n.formatMessage({ id: 'how_sto_item_text_4' })}</p>
          </div>
          <div>
            <h4>{i18n.formatMessage({ id: 'how_sto_item_head_5' })}​</h4>
            <p>{format(i18n.formatMessage({ id: 'how_sto_item_text_5' }))}</p>
          </div>
          <div>
            <h4>{i18n.formatMessage({ id: 'how_sto_item_head_6' })}</h4>
            <p>{format(i18n.formatMessage({ id: 'how_sto_item_text_6' }))}</p>
          </div>
        </div>
      </aside>
    </section>
    <section className={styles.faq}>
      <h2>{i18n.formatMessage({ id: 'how_faq_head' })}</h2>
      <div>
        <aside>
          <h4>{i18n.formatMessage({ id: 'how_faq_iss_head' })}</h4>
          <ul>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_faq_iss_q_1' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_faq_iss_a_1' })}</p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_faq_iss_q_2' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_faq_iss_a_2' })}</p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_faq_iss_q_3' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_faq_iss_a_3' })}</p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_faq_iss_q_4' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_faq_iss_a_4' })}</p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_faq_iss_q_5' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_faq_iss_a_5' })}</p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_faq_iss_q_6' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_faq_iss_a_6' })}</p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_faq_iss_q_7' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_faq_iss_a_7' })}</p>
            </li>
          </ul>
        </aside>
        <aside>
          <h4>{i18n.formatMessage({ id: 'how_faq_inv_head' })}</h4>
          <ul>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_faq_inv_q_1' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_faq_inv_a_1' })}</p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_faq_inv_q_2' })}</h6>
              <p>
                1. {i18n.formatMessage({ id: 'how_faq_inv_a_2_1_1' })}<br /><br />
                {i18n.formatMessage({ id: 'how_faq_inv_a_2_1_2' })}<br /><br />
                2. {i18n.formatMessage({ id: 'how_faq_inv_a_2_2_1' })}<br /><br />
                {i18n.formatMessage({ id: 'how_faq_inv_a_2_2_2' })}<br /><br />
                3. {i18n.formatMessage({ id: 'how_faq_inv_a_2_3_1' })}<br /><br />
                {i18n.formatMessage({ id: 'how_faq_inv_a_2_3_2' })}
              </p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_faq_inv_q_3' })}</h6>
              <p>
                1. {i18n.formatMessage({ id: 'how_faq_inv_a_3_1_1' })}<br /><br />
                {i18n.formatMessage({ id: 'how_faq_inv_a_3_1_2' })}<br /><br />
                2. {i18n.formatMessage({ id: 'how_faq_inv_a_3_2_1' })}<br /><br />
                {i18n.formatMessage({ id: 'how_faq_inv_a_3_2_2' })}<br /><br />
                {i18n.formatMessage({ id: 'how_faq_inv_a_3_2_3' })}<br /><br />
                {i18n.formatMessage({ id: 'how_faq_inv_a_3_3_1' })}<br />
                - {i18n.formatMessage({ id: 'how_faq_inv_a_3_3_2' })}
              </p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_faq_inv_q_4' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_faq_inv_a_4' })}</p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_faq_inv_q_5' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_faq_inv_a_5' })}</p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_faq_inv_q_6' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_faq_inv_a_6' })}</p>
            </li>
          </ul>
        </aside>
      </div>
    </section>
    <section className={styles.academy}>
      <h2>{i18n.formatMessage({ id: 'how_academy_head' })}</h2>
      <div>
        <aside>
          <h4>{i18n.formatMessage({ id: 'how_academy_sto_head' })}</h4>
          <ul>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_academy_sto_q_1' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_academy_sto_a_1' })}</p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_academy_sto_q_2' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_academy_sto_a_2' })}</p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_academy_sto_q_3' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_academy_sto_a_3' })}</p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_academy_sto_q_4' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_academy_sto_a_4' })}</p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_academy_sto_q_5' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_academy_sto_a_5' })}</p>
            </li>
          </ul>
        </aside>
        <aside>
          <h4>{i18n.formatMessage({ id: 'how_academy_bc_head' })}</h4>
          <ul>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_academy_bc_q_1' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_academy_bc_a_1' })}</p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_academy_bc_q_2' })}</h6>
              <p>
                {i18n.formatMessage({ id: 'how_academy_bc_a_2_1' })}<br /><br />
                {i18n.formatMessage({ id: 'how_academy_bc_a_2_2' })}
              </p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_academy_bc_q_3' })}</h6>
              <p>
                {i18n.formatMessage({ id: 'how_academy_bc_a_3_1' })}<br /><br />
                {i18n.formatMessage({ id: 'how_academy_bc_a_3_2' })}
              </p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_academy_bc_q_4' })}</h6>
              <p>
                {i18n.formatMessage({ id: 'how_academy_bc_a_4_1' })}<br /><br />
                {i18n.formatMessage({ id: 'how_academy_bc_a_4_2' })}<br /><br />
                {i18n.formatMessage({ id: 'how_academy_bc_a_4_3' })}
              </p>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  </main>;
};

export default HowItWork;
