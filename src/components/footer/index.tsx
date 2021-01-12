/**
 * @description 描述
 */
import React, { FC, Fragment } from 'react';
import styles from './styles/index.less';
const logo = require('./images/atom8_logo_1.png');
interface PropTypes { }

const menulist = [
  { label: "Home", descript: ["Conditions of Use of Website"]},
  { label: "About us", descript: [" User Guide and FAQ"]},
  { label: "STO projects", descript: [" Data Privacy Policy"] },
  { label: "How it works", descript: [" Cookies Policy"] }
]

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


const Header: FC<PropTypes> = function(props) {
  return (
    <div className={styles['footer']}>
      <div className={ styles['footer-guide']}>
        <STOMenu menu={ menulist}/>
      </div>
      <div className={styles['copyright']}>© Copyright Atom 8 2020</div>
      <div className={styles['rectangle']}>
        <div className={styles['rectangle-box']}>
        <p>
          This information (the “Information”) is provided to existing and
          prospective investors in Atom 8 Ltd. (the "Company"). The Information
          contains commercially sensitive information which constitutes
          confidential information of the Company and therefore any disclosure
          made in contravention of any confidentiality agreement by you will
          result in a breach of contract and appropriate remedies being pursued
          against you. If you are not the intended recipient of this document
          then, by virtue of receiving the Information, the you agree not to
          reproduce or distribute the Information in whole or in part, by
          electronic or any other means, not to disclose any of its contents and
          to return this document to the Company immediately.
        </p>
        <p>
          This Information contains certain “forward-looking statements”
          regarding the belief or current expectations of the Company about the
          financial condition, results of operations and business of companies
          referred to in this presentation. Such forward-looking statements are
          not guarantees of future performance. Rather, they speak only as of
          the date of this presentation, are based on current views and
          assumptions and involve known and unknown risks, uncertainties and
          other factors, many of which are outside the control of the Company
          and are difficult to predict, that may cause the actual results,
          performance, achievements or developments of the Company to differ
          materially from any future results, performance, achievements or
          developments expressed or implied from the forward-looking statements.{' '}
        </p>
        <p>
          This Information is believed by the Company to be accurate and
          correct, and statements of opinion herein are considered by the
          Company to be reasonable, in each case as at the date set out below
          unless otherwise stated herein. The Information, however, has not been
          independently verified and neither the Company nor any other person
          accepts responsibility for the Information.
        </p>
        <p>
          No representations, warranties or undertakings (express or implied)
          are given as to the accuracy or completeness of the information in
          this communication, and the Company shall not be liable or responsible
          for any loss or damage whatsoever arising directly or indirectly in
          connection with any person relying on this communication.
        </p>
        <p>
          The Information is not intended to be relied upon as the basis for an
          investment decision or action. The Information is not, shall not be
          construed as, and does not constitute, an offer or, invitation or,
          recommendation or investment advice by the Company to sell or issue to
          or a solicitation to subscribe for or buy any interest in the Company
          or any of its affiliates, nor shall any securities in or assets of the
          Company or any other entity be offered, issued or sold to any person
          in any jurisdiction in which such offer, solicitation, purchase or
          sale would be unlawful under the securities or equivalent laws and
          regulations of such jurisdiction.
        </p>
        <p>
            The Information is being provided solely for general information
            purposes and is not, shall not be construed as, and does not
            constitute as legal, business, or tax advice. In deciding whether to
            make any investment decision, the recipient must rely on its own
            evaluation of the terms of any proposed investment and the merits and
            risks involved and should seek independent advice where necessary.
        </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
