/**
 * @description 描述
 */
import React, { FC, Fragment } from 'react';
import { connect, useIntl, getLocale, setLocale, Helmet, history } from 'umi';
import styles from './styles/index.less';
import { Button, Menu, Input, Select } from 'antd';
import Card, { MoreCardTypes, MoreCard} from './components/Card';
const { Option } = Select;
interface PropTypes { }
const STO_noList: FC<PropTypes> = function (props) {
  const intl = useIntl();
  return (
    <div className={styles['sto_list_box']} >
        <div className={styles['sto_list']}>
        <div className={styles['sto_title']}>
          { intl.formatMessage({
            id: 'list_label',
          })}
          <div className={styles['sto_retitle']}>
            { intl.formatMessage({
              id: 'list_comingsoon',
            })}
          </div>
          <div className={ styles['sto_email']}>
            <Input placeholder={ intl.formatMessage({
              id: 'sto_email_placeholder',
            })} className={ styles['sto_emailInput']}/>
            <Button className={ styles['sto_submit']}>
            { intl.formatMessage({
              id: 'sto_email_submit',
            })}
            </Button>
          </div>
          <div className={ styles['sto_detail']}>We're committed to your privacy. Atom 8 uses your provided contact information to contact you about digital asset related projects, products, and services.  By clicking submit, you consent to our privacy policy and allow Atom 8 to store and provide you with digital asset related content.
You may unsubscribe from these communications at any time. For more information, check out our Privacy Policy.</div>
        </div>
      </div>
    </div >
  )
};




const STOHaveList: FC<PropTypes> = function (props) {
  const intl = useIntl();
  const handleChange = (value:String) => {
    // console.log(`selected ${value}`);
  }
  const jumpTodetail = (value:String) => {
    history.push('/detail')
  }

  return (
    <div className={styles['sto_havelist'] }>
      <div className={styles['sto_banner']}></div>
      <div className={styles['sto_listbox']}>
        <div className={ styles['sto_list_menu']}>
          <Select defaultValue="all" style={{ width: 175 }} className={ styles['sto_type_filter']} onChange={handleChange}>
            <Option value="all">{ intl.formatMessage({
              id: 'sto_Alltype',
            })}</Option>
            <Option value="current">{ intl.formatMessage({
              id: 'sto_Current',
            })}</Option>
            <Option value="upcoming">{ intl.formatMessage({
              id: 'sto_Upcoming',
            })}</Option>
            <Option value="completed">{ intl.formatMessage({
              id: 'sto_Completed',
            })}</Option>
          </Select>

          <ul className={styles['sto_list_filter']}><li className={'seled'}>{ intl.formatMessage({
              id: 'sto_Alltype',
            })}</li><li>{ intl.formatMessage({
              id: 'sto_Current',
            })}</li><li>{ intl.formatMessage({
              id: 'sto_Upcoming',
            })}</li><li>{ intl.formatMessage({
              id: 'sto_Completed',
            })}</li></ul>
        </div>

          <ul className={ styles['sto_card_box']}>
            <li onClick={(e) => jumpTodetail('id')}><Card /></li>
            <li><Card /></li>
            <li><MoreCard /></li>
          </ul>

      </div>
    </div>
  )
}


const STOList: FC<PropTypes> = function (props) {
  return (<STOHaveList />)
}


export default STOList;
