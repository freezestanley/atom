/**
 * @description 描述
 */
import React, { FC, useState, useMemo } from 'react';
import styles from './styles/index.less';
const [mock] = [require('./images/1.png')];
interface PropTypes {}
interface NewsListTypes {
  desc: string;
  date: string;
  title: string;
}
const LastThinking: FC<PropTypes> = function(props) {
  const mockNewsList: NewsListTypes[] = [
    {
      desc: 'By someone',
      date: '03 March 2019',
      title: 'Lorem Ipsum is simply dummy text of the printing.',
    },
    {
      desc: 'By someone',
      date: '03 March 2019',
      title: 'Lorem Ipsum is simply dummy text of the printing.',
    },
    {
      desc: 'By someone',
      date: '03 March 2019',
      title: 'Lorem Ipsum is simply dummy text of the printing.',
    },
    {
      desc: 'By someone',
      date: '03 March 2019',
      title: 'Lorem Ipsum is simply dummy text of the printing.',
    },
    {
      desc: 'By someone',
      date: '03 March 2019',
      title: 'Lorem Ipsum is simply dummy text of the printing.',
    },
  ];
  const [list, setList] = useState<NewsListTypes[]>(mockNewsList),
    headInfo = useMemo(() => {
      if (!Array.isArray(list)) return;
      return list[0];
    }, [list]);
  function renderList() {
    if (!Array.isArray(list)) return;
    return list.slice(1).map(item => {
      return <div className={styles['list-box']}>{renderItem(item)}</div>;
    });
  }
  function renderItem(item: NewsListTypes) {
    if (!item) return;
    return (
      <div className={styles['item']}>
        <img src={mock} alt="" />
        <div className={styles['text']}>
          <div>
            <span>{item.desc}</span> | <span>{item.date}</span>
          </div>
          <div>{item.title}</div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles['last-thinking']}>
      <div className={styles['list']}>{renderList()}</div>
      {headInfo && <div className={styles['head']}>{renderItem(headInfo)}</div>}
    </div>
  );
};

export default LastThinking;
