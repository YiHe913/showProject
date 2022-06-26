import { useEffect, useState } from 'react';
import styles from './index.less';
import Header from '../../../components/Header';
import Banner from '../../../components/Banner';
import PhotoWall from './components/PhotoWall';
import Footer from '../../../components/Footer';
const HomePage = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className={styles['homePage']}>
      <Header />
      <Banner />
      <div className={styles['homePage-photoWall']}>
        <PhotoWall />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
