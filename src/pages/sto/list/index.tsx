/**
 * @description 描述
 */
import React, { FC, Fragment } from 'react';
import { connect, useIntl, getLocale, setLocale, Helmet, history } from 'umi';
import styles from './styles/index.less';
import { Button, Menu } from 'antd';
interface PropTypes {}

const STOList: FC<PropTypes> = function (props) {
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
          <div>

          </div>
          <div className={ styles['sto_detail']}>We're committed to your privacy. Atom 8 uses your provided contact information to contact you about digital asset related projects, products, and services.  By clicking submit, you consent to our privacy policy and allow Atom 8 to store and provide you with digital asset related content.
You may unsubscribe from these communications at any time. For more information, check out our Privacy Policy.</div>
        </div>
      </div>
    </div >
  )
};

export default STOList;
