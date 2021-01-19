import React, { FC, Fragment } from 'react';
import { connect, useIntl, getLocale, setLocale, Helmet, history } from 'umi';
import styles from './styles/index.less';
import { Button, Menu, Input, Select } from 'antd';
export interface CardTypes { }
const Card: FC<CardTypes> = function (props) {
  const intl = useIntl();
  return (
    <div className={ styles['sto_card']}>
      <div className={styles['sto_header']}>{ intl.formatMessage({
              id: 'sto_open',
            })}</div>
      <div className={styles['sto_banner']} alt="current" style={{backgroundImage: `url(${require("./images/sto_dummy1.png")})`}}></div>
      <div className={styles['sto_title']}>TITLE<b className={styles['sto_warning']}>i</b></div>
      <ul className={ styles['sto_table']}>
        <li><div>XX</div><div>XX</div><div>XX</div></li>
        <li><div>{ intl.formatMessage({
              id: 'sto_targetreturn',
            })}</div><div>{ intl.formatMessage({
              id: 'sto_targetsize',
            })}</div><div>{ intl.formatMessage({
              id: 'sto_investment',
            })}</div></li>
      </ul>
      <div className={styles['sto_line']}></div>
      <ul className={ styles['sto_info_box']}>
        <li><div>{ intl.formatMessage({
              id: 'sto_strategy',
            })}</div><div>Co-Investment</div></li>
        <li><div>{ intl.formatMessage({
              id: 'sto_geograhies',
            })}</div><div>Global</div></li>
        <li><div>{ intl.formatMessage({
              id: 'sto_industry',
            })}</div><div>Healthcare</div></li>
      </ul>
      <div className={styles['sto_website']}>http://www.example.com/</div>
      <div className={styles['sto_fund']}>{ intl.formatMessage({
              id: 'sto_viewfund',
            })}</div>
    </div >
  )
};


export interface MoreCardTypes { }
export const MoreCard: FC<MoreCardTypes> = function (props) {
  const intl = useIntl();
  return (
    <div className={styles['sto_morecard']}>
      <div className={ styles['sto_morecard_banner']}></div>
      <div className={styles['sto_morecard_title']}>{ intl.formatMessage({
              id: 'sto_opport',
            })}</div>
      <div className={styles['sto_morecard_info']}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
      <div className={ styles['sto_morecard_more']}>{ intl.formatMessage({
              id: 'sto_registmore',
            })} </div>
    </div >
  )
}

export default Card;
