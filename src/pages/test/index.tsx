import Header from '../../../components/Header';
import styles from './index.less';
import { useEffect, useState } from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
const Test = () => {
  const [list, setList] = useState<any>(['text', 'text', 'text']);
  const [checkedInput, setCheckedInput] = useState<string>('');

  useEffect(() => {
    console.log(list, 'list');
  }, [list]);

  const changeVal = (val, id) => {
    let oldList = JSON.parse(JSON.stringify(list));
    oldList[id] = val;
    // console.log(JSON.parse(JSON.stringify(list)), 'oldList');
    setList(oldList);
  };

  const calculate = (type, total, num?) => {
    if (total === 0) {
      total = 1;
    }
    if (type === 'width') {
      let single = 100 / total;
      return single * (num + 1);
    } else {
      return 100 / total;
    }
  };

  const uncalculate = (type, total, num?) => {
    if (total === 0) {
      total = 1;
    }
    if (type === 'width') {
      let single = 100 / total;
      return single * (total - num);
    } else {
      return 100 / total;
    }
  };

  const add = () => {
    setList([...list, 'text']);
  };

  const del = () => {
    let oldList = JSON.parse(JSON.stringify(list));
    oldList.splice(checkedInput, 1);
    setList(oldList);
    setCheckedInput('');
  };

  return (
    <div className={styles['test']}>
      <Header />
      <div className={styles['test-content']}>
        <div className={styles['test-content-left']}>
          <div className={styles['test-content-left-frame']}>
            <div style={{ margin: '15px 0' }}>
              <Button
                type="primary"
                ghost
                style={{ marginRight: '15px' }}
                onClick={add}
              >
                + add +
              </Button>
              <Button
                type="primary"
                danger
                ghost
                onClick={del}
                disabled={checkedInput === ''}
              >
                - delete -
              </Button>
            </div>
            <div>
              {list.map((item, index) => (
                <Input
                  style={{ marginBottom: '10px' }}
                  value={item}
                  key={index}
                  onChange={(e) => changeVal(e.target.value, index)}
                  onFocus={() => {
                    setCheckedInput(String(index));
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles['test-content-right']}>
          {list.map((item, index) => (
            <Input
              style={{
                width: `${calculate('width', list.length, index)}%`,
                height: `${calculate('height', list.length)}%`,
              }}
              value={item}
              key={index}
              onChange={(e) => changeVal(e.target.value, index)}
              onFocus={() => {
                setCheckedInput(String(index));
              }}
            />
            // <div key={index}
            //   contentEditable
            //   onInput={(e) => changeVal(e.target.innerText, index)}
            //   onFocus={() => { setCheckedInput(String(index)) }}
            //   style={{
            //     width: `${calculate('width', list.length, index)}%`,
            //     height: `${calculate('height', list.length)}%`
            //   }}
            // >{item}</div>
          ))}
        </div>
      </div>

      <div className={styles['test-content']}>
        <div className={styles['test-content-left']}>
          <div className={styles['test-content-left-frame']}>
            <div style={{ margin: '15px 0' }}>
              <Button
                type="primary"
                ghost
                style={{ marginRight: '15px' }}
                onClick={add}
              >
                + add +
              </Button>
              <Button
                type="primary"
                danger
                ghost
                onClick={del}
                disabled={checkedInput === ''}
              >
                - delete -
              </Button>
            </div>
            <div>
              {list.map((item, index) => (
                <Input
                  style={{ marginBottom: '10px' }}
                  value={item}
                  key={index}
                  onChange={(e) => changeVal(e.target.value, index)}
                  onFocus={() => {
                    setCheckedInput(String(index));
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles['test-content-right']}>
          {list.map((item, index) => (
            <Input
              style={{
                width: `${uncalculate('width', list.length, index)}%`,
                height: `${uncalculate('height', list.length)}%`,
              }}
              value={item}
              key={index}
              onChange={(e) => changeVal(e.target.value, index)}
              onFocus={() => {
                setCheckedInput(String(index));
              }}
            />
            // <div key={index}
            //   contentEditable
            //   onInput={(e) => changeVal(e.target.innerText, index)}
            //   onFocus={() => { setCheckedInput(String(index)) }}
            //   style={{
            //     width: `${calculate('width', list.length, index)}%`,
            //     height: `${calculate('height', list.length)}%`
            //   }}
            // >{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
