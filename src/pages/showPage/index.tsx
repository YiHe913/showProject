import { useEffect, useState } from 'react';
import styles from './index.less';
import { EyeFilled } from '@ant-design/icons';
import Header from '../../../components/Header';
import Card from './components/Card';
import Footer from '../../../components/Footer';
import { getParam } from '@/utils/utils';
const ShowPage = () => {
  const [data, setData] = useState<any>([]);
  const [pageTitle, setPageTitle] = useState<any>([]);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    let list = [
      {
        title: 'demo1',
        type: '0', //new:0, hot:1
        picUrl: <img src={require('../../../assets/demo1.png')} />,
        supported: '233',
        unsupported: '21',
        collectFlag: true,
        supportFlag: '0', // 支持0 不支持1 未操作2
      },
      {
        title: 'demo2',
        type: '1', //new:0, hot:1
        picUrl: <img src={require('../../../assets/demo2.png')} />,
        supported: '233',
        unsupported: '21',
        collectFlag: false,
        supportFlag: '1',
      },
      {
        title: 'demo3',
        type: '2', //new:0, hot:1
        picUrl: <img src={require('../../../assets/demo1.png')} />,
        supported: '233',
        unsupported: '21',
        collectFlag: false,
        supportFlag: '2',
      },
      {
        title: 'demo4',
        type: '2', //new:0, hot:1
        picUrl: <img src={require('../../../assets/demo2.png')} />,
        supported: '233',
        unsupported: '21',
        collectFlag: false,
        supportFlag: '2',
      },
      {
        title: 'demo5',
        type: '1', //new:0, hot:1
        picUrl: <img src={require('../../../assets/demo1.png')} />,
        supported: '233',
        unsupported: '21',
        collectFlag: false,
        supportFlag: '2',
      },
      {
        title: 'demo6',
        type: '2', //new:0, hot:1
        picUrl: <img src={require('../../../assets/demo2.png')} />,
        supported: '233',
        unsupported: '21',
        collectFlag: false,
        supportFlag: '2',
      },
      {
        title: 'demo7',
        type: '2', //new:0, hot:1
        picUrl: <img src={require('../../../assets/demo1.png')} />,
        supported: '233',
        unsupported: '21',
        collectFlag: false,
        supportFlag: '2',
      },
      {
        title: 'demo8',
        type: '2', //new:0, hot:1
        picUrl: <img src={require('../../../assets/demo2.png')} />,
        supported: '233',
        unsupported: '21',
        collectFlag: false,
        supportFlag: '2',
      },
      {
        title: 'demo9',
        type: '1', //new:0, hot:1
        picUrl: <img src={require('../../../assets/demo1.png')} />,
        supported: '233',
        unsupported: '21',
        collectFlag: false,
        supportFlag: '2',
      },
      {
        title: 'demo10',
        type: '2', //new:0, hot:1
        picUrl: <img src={require('../../../assets/demo2.png')} />,
        supported: '233',
        unsupported: '21',
        collectFlag: false,
        supportFlag: '2',
      },
    ];
    setData(list);
    console.log(getParam('type'), 'getParam()');
    if (getParam('type') === '0') {
      setPageTitle('猜你喜欢');
    }
    if (getParam('type') === '1') {
      setPageTitle('热门推荐');
    }
    if (getParam('type') === '2') {
      setPageTitle('视频模板');
    }
    if (getParam('type') === '3') {
      setPageTitle('广告设计');
    }
    if (getParam('type') === '4') {
      setPageTitle('创意广告');
    }
  }, [getParam('type')]);

  return (
    <div className={styles['showPage']}>
      <Header />
      <div className={styles['showPage-introduce']}>
        <div className={styles['showPage-introduce-box']}>
          <div className={styles['showPage-introduce-box-title']}>
            <img src={require('../../../assets/demo1.png')} />
            <h2>{pageTitle}</h2>
          </div>
          <div className={styles['showPage-introduce-box-tag']}>
            <p> 人群：酒店运营/酒店管理者、餐饮运营/餐饮管理者、承包商</p>
            <p>场景：高清图库</p>
          </div>
        </div>
      </div>
      <div className={styles['showPage-pageviews']}>
        <div className={styles['showPage-pageviews-box']}>
          <div className={styles['showPage-pageviews-box-tag']}>
            <EyeFilled />
            <span>浏览463次</span>
          </div>
        </div>
      </div>
      <div className={styles['showPage-content']}>
        <div className={styles['showPage-content-box']}>
          {data.map((item: any, index: any) => (
            <Card data={item} key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShowPage;
