import { useEffect, useState } from 'react';
import styles from './index.less';
import { Input } from 'antd';
const { Search } = Input;

const Banner = () => {
  const onSearch = (value: string) => console.log(value);
  return (
    <div className={styles['banner']}>
      <div className={styles['banner-search']}>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
        />
      </div>
    </div>
  );
};

export default Banner;
