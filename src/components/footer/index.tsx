/**
 * @description 描述
 */
import React, { FC, Fragment } from 'react';
import { connect, useIntl, getLocale, setLocale, Helmet } from 'umi';
import styles from './styles/index.less';

interface PropTypes { }

interface MenuPropTypes {
  menu: {
    label: String,
    descript: String[],
  }[]
}

const STOMenu: FC<MenuPropTypes> = function (props) {
  return (
    <dl className={ styles.menulist }>
      {
        props.menu.map((ele, idx, arr) => {
          return (
            <Fragment  key={`${idx}c`}>
              <dt key={`${idx}a`}>{ele.label}</dt>
              {
                ele.descript.map((va, ix, ay) => {
                  return (<dd  key={`${ix}b`}>{va}</dd>)
                })
              }
            </Fragment>
          )
        })
      }
    </dl>
  )
}


const Header: FC<PropTypes> = function (props) {
  const intl = useIntl();

  const menulist = [
    { label: intl.formatMessage({
      id: 'footer_home',
    }), descript: [
          intl.formatMessage({
            id: 'footer_home_description',
          })
        ]},
        { label: intl.formatMessage({
          id: 'footer_aboutus',
        }), descript: [
          intl.formatMessage({
            id: 'footer_aboutus_description',
          })
        ]},
        { label: intl.formatMessage({
          id: 'footer_stoprojects',
        }), descript: [
          intl.formatMessage({
            id: 'footer_stoprojects_description',
          })
        ]},
        { label: intl.formatMessage({
          id: 'footer_howitworks',
        }), descript: [
          intl.formatMessage({
            id: 'footer_howitworks_description',
          })
        ]},
  ]

  return (
    <div className={styles['footer']}>
      <div className={ styles['footer-guide']}>
        <STOMenu menu={ menulist}/>
      </div>
      <div className={styles['copyright']}>© Copyright Atom 8 2020</div>
      <div className={styles['rectangle']}>
        <div className={styles['rectangle-box']}>
        <p>
            { intl.formatMessage({
                id: 'footer_info1',
              })
            }
        </p>
        <p>
            { intl.formatMessage({
                id: 'footer_info2',
              })
            }
        </p>
        <p>
            { intl.formatMessage({
                id: 'footer_info3',
              })
            }
        </p>
        <p>
        { intl.formatMessage({
                id: 'footer_info4',
              })
            }
        </p>
        <p>
        { intl.formatMessage({
                id: 'footer_info5',
              })
            }
        </p>
        <p>
        { intl.formatMessage({
                id: 'footer_info6',
              })
            }
        </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
