import React, { FC, Fragment } from 'react';
import { connect, useIntl, getLocale, setLocale, Helmet, history } from 'umi';
import styles from './styles/index.less';
import { Button, Menu, Input, Select } from 'antd';
interface PropTypes { }
const Detail: FC<PropTypes> = function (props) {
  const intl = useIntl();
  return (
    <div className={ styles['sto_detail_box']}>
      <div className={styles['sto_detail']}>
        <div className={styles['sto_right']}>

          <div className={styles['sto_right_card']}>
            <div className={styles['sto_right_title']}>Title</div>
            <div className={ styles['sto_right_content'] }>
              <div className={ styles['sto_right_title2'] }>Now trading on XXX</div>
              <div className={ styles['sto_right_title3']}>Started on XXX</div>
            </div>

            <ul className={styles['sto_table']}>
              <li><div>Traget Return</div><div>17% P.A</div></li>
              <li><div>Lockup</div><div>None</div></li>
            </ul>
          </div>

          <div className={ styles['sto_tag_box']}>
            <div className={styles['sto_tag_boxTitle']}>TAG</div>
            <ul className={ styles['sto_tag_list']}>
              <li>tags</li>
              <li>tags</li>
              <li>tags</li>
            </ul>
          </div>
          <div className={ styles['sto_submit']}>{ intl.formatMessage({
              id: 'sto_sign',
            })}</div>

        </div>



        <div className={ styles['sto_left']}>
          <img src={require('./images/sto_2_dummy1.png')} className={styles['sto_banner']} />
          <div className={styles['sto_detail_title']}>Product Hightlights</div>
          <p className={ styles['sto_detail_p']}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <div className={styles['sto_detail_title']}>Title</div>
          <p className={ styles['sto_detail_p']}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          <div className={ styles['sto_bussinessCard']}>

            <div className={ styles['sto_bussinessCard_left']}>
              <div className={styles['sto_avater']}></div>
              <div className={ styles['sto_bscard_title']}>Name</div>
              <div>Title</div>
            </div>

            <div className={ styles['sto_bussinessCard_right']}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
          </div>


        </div>

      </div>
    </div>
  );
}
export default Detail
