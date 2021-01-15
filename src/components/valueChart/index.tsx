import React, { FC } from 'react';
import { useIntl } from 'umi';
import styles from './styles/index.less';

interface PropTypes { }

const ValueChart: FC<PropTypes> = function (props) {
    const i18n = useIntl();
    return (
        <aside className={styles.value_chart}>
            <h3>{i18n.formatMessage({ id: 'home_values_chart_head' })}</h3>
            <h3>{i18n.formatMessage({ id: 'home_values_chart_text' })}</h3>
            <ul>
                <li>
                    <h3>{i18n.formatMessage({ id: 'home_values_chart_item_head_1' })}</h3>
                    <p className={styles.list}>{i18n.formatMessage({ id: 'home_values_chart_item_text_1_1' })}</p>
                    <p className={styles.list}>{i18n.formatMessage({ id: 'home_values_chart_item_text_1_2' })}</p>
                    <p className={styles.list}>{i18n.formatMessage({ id: 'home_values_chart_item_text_1_3' })}</p>
                    <p className={styles.list}>{i18n.formatMessage({ id: 'home_values_chart_item_text_1_4' })}</p>
                    <p className={styles.list}>{i18n.formatMessage({ id: 'home_values_chart_item_text_1_5' })}</p>
                </li>
                <li>
                    <h3>{i18n.formatMessage({ id: 'home_values_chart_item_head_2' })}</h3>
                    <p>{i18n.formatMessage({ id: 'home_values_chart_item_text_2' })}</p>
                </li>
                <li>
                    <h3>{i18n.formatMessage({ id: 'home_values_chart_item_head_3' })}</h3>
                </li>
                <li>
                    <h3>{i18n.formatMessage({ id: 'home_values_chart_item_head_4' })}</h3>
                    <p>{i18n.formatMessage({ id: 'home_values_chart_item_text_4' })}</p>
                </li>
                <li>
                    <h3>{i18n.formatMessage({ id: 'home_values_chart_item_head_5' })}</h3>
                </li>
            </ul>
            <div>
                {i18n.formatMessage({ id: 'home_values_chart_comment_1' })}<br />
                {i18n.formatMessage({ id: 'home_values_chart_comment_2' })}
            </div>
        </aside>
    );
}

export default ValueChart;