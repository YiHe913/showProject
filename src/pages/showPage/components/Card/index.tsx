import { useEffect, useState } from 'react';
import styles from './index.less';
import {
  LikeFilled,
  LikeOutlined,
  HeartFilled,
  HeartOutlined,
} from '@ant-design/icons';

const Card = ({ data }: { data: any }) => {
  const [likeFlag, setLikeFlag] = useState(data?.collectFlag);
  const [supportFlag, setSupportFlag] = useState(data?.supportFlag === '0');
  const [unSupportFlag, setUnsupportFlag] = useState(data?.supportFlag === '1');
  const [supported, setSupported] = useState(data?.supported || 0);
  const [unsupported, setUnsupported] = useState(data?.unsupported || 0);
  // useEffect(() => {
  //   console.log(data, 'data');
  // }, [data])

  const supportFunc = (type: string) => {
    if (type === '0') {
      if (!unSupportFlag) {
        setSupportFlag(!supportFlag);
        if (supportFlag) {
          setSupported(Number(supported) - 1);
        } else {
          setSupported(Number(supported) + 1);
        }
      }
    } else {
      if (!supportFlag) {
        setUnsupportFlag(!unSupportFlag);
        if (unSupportFlag) {
          setUnsupported(Number(unsupported) - 1);
        } else {
          setUnsupported(Number(unsupported) + 1);
        }
      }
    }
  };

  const likeFunc = () => {
    setLikeFlag(!likeFlag);
  };

  return (
    <div className={styles['cardBox']}>
      <div className={styles['card']}>
        {data?.type !== '2' && (
          <div className={styles['card-tag']}>
            {data?.type === '0' ? 'new' : 'hot'}
          </div>
        )}
        <div className={styles['card-collect']}>
          {likeFlag ? (
            <HeartFilled style={{ color: '#FA5555' }} onClick={likeFunc} />
          ) : (
            <HeartOutlined onClick={likeFunc} />
          )}
        </div>
        {data?.picUrl}
        <div className={styles['card-supportBox']}>
          <div
            className={styles['card-supportBox-support']}
            onClick={() => supportFunc('0')}
          >
            {supportFlag ? <LikeFilled /> : <LikeOutlined />}
            <span>{supported}</span>
          </div>
          <div
            className={styles['card-supportBox-unSupport']}
            onClick={() => supportFunc('1')}
          >
            {unSupportFlag ? <LikeFilled /> : <LikeOutlined />}
            <span>{unsupported}</span>
          </div>
        </div>
      </div>
      <p>{data?.title}</p>
    </div>
  );
};

export default Card;
