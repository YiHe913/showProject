import { useEffect, useState } from 'react';
import { DoubleRightOutlined } from '@ant-design/icons';
import { history } from 'umi';
import styles from './index.less';

const PhotoWall = () => {
  const jump = (link: string) => {
    history.push(`/list?type=${link}`);
  };

  return (
    <div className={styles['photoWall']}>
      <div className={styles['photoWall-bigPic']} onClick={() => jump('0')}>
        <h2>猜你喜欢</h2>
        <p>猜你喜欢</p>
      </div>
      <div className={styles['photoWall-smallPics']}>
        <div onClick={() => jump('1')}>
          <h2>热门推荐</h2>
          <p>热门推荐</p>
        </div>
        <div onClick={() => jump('2')}>
          <h2>视频模板</h2>
          <p>视频模板</p>
        </div>
        <div onClick={() => jump('3')}>
          <h2>广告设计</h2>
          <p>广告设计</p>
        </div>
        <div onClick={() => jump('4')}>
          <h2>创意图片</h2>
          <p>创意图片</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoWall;
