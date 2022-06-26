import styles from './index.less';
import { Link, history } from 'umi';
import { useEffect, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
const Header = () => {
  const [menuData, setMenuData] = useState<any>([]);

  useEffect(() => {
    let list = [
      { label: '首页', url: '/' },
      { label: '猜你喜欢', url: '/list?type=0' },
      { label: '热门推荐', url: '/list?type=1' },
      { label: '视频模板', url: '/list?type=2' },
      { label: '广告设计', url: '/list?type=3' },
      { label: '创意广告', url: '/list?type=4' },
      { label: '人才招聘', url: '/' },
      { label: '关于我们', url: '/test' },
    ];
    setMenuData(list);
  }, []);

  return (
    <div className={styles['header']}>
      <div className={styles['header-top']}>
        <div className={styles['header-top-box']}>
          <span>welcome!</span>
          <span>Tel:5566-11334990</span>
        </div>
      </div>
      <div className={styles['header-content']}>
        <div className={styles['header-content-box']}>
          <div className={styles['header-content-box-logo']}>LOGO</div>
          <div className={styles['header-content-box-menu']}>
            {menuData.map((item: string, index: number) => (
              <div key={index}>
                <Link to={item?.url}>{item?.label}</Link>
              </div>
            ))}
          </div>
          {localStorage.getItem('token') ? (
            <div className={styles['header-content-box-useInfo']}>
              <div className={styles['header-content-box-useInfo-avatar']}>
                <UserOutlined />
              </div>
              <span>{localStorage.getItem('usename')}</span>
              <Button
                onClick={() => {
                  localStorage.removeItem('token');
                  localStorage.removeItem('usename');
                  history.push('/login');
                }}
              >
                退出登录
              </Button>
            </div>
          ) : (
            <div className={styles['header-content-box-btns']}>
              <Link to="/login">登录</Link>
              <Link to="/">注册</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
