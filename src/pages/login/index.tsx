import { useState, useEffect } from 'react';
import styles from './index.less';
import { Button, Form, Input, Tabs, Col, Row, Select } from 'antd';
import { history, Link } from 'umi';
const { TabPane } = Tabs;
const { Option } = Select;
const Login = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values: any) => {
    console.log('Finish:', values);
    if (values?.username === 'admin' && values?.password === '123456') {
      localStorage.setItem(`usename`, 'admin');
      localStorage.setItem(`token`, 'asdfgh1234123asqewqwew');
      history.push('/');
    }
  };
  const onChange = (key: string) => {
    console.log(key);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className={styles['login']}>
      <div className={styles['login-box']}>
        <div className={styles['login-box-content']}>
          <div className={styles['login-box-content-code']}>
            <img />
          </div>
          <div className={styles['login-box-content-form']}>
            <Tabs defaultActiveKey="1" onChange={onChange}>
              <TabPane tab="账号登录" key="1">
                <Form
                  form={form}
                  name="horizontal_login"
                  onFinish={onFinish}
                  autoComplete="off"
                >
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your username!',
                      },
                    ]}
                  >
                    <Input placeholder="手机号/用户名/邮箱" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                    ]}
                  >
                    <Input type="password" placeholder="密码" />
                  </Form.Item>
                  <Form.Item shouldUpdate style={{ textAlign: 'center' }}>
                    {() => (
                      <Button
                        type="primary"
                        htmlType="submit"
                        disabled={
                          !form.isFieldsTouched(true) ||
                          !!form
                            .getFieldsError()
                            .filter(({ errors }) => errors.length).length
                        }
                      >
                        登录
                      </Button>
                    )}
                  </Form.Item>
                </Form>
              </TabPane>
              <TabPane tab="短信登录" key="2">
                <div>
                  <Form
                    form={form}
                    name="horizontal_login"
                    onFinish={onFinish}
                    autoComplete="off"
                    initialValues={{
                      prefix: '86',
                    }}
                  >
                    <Form.Item
                      name="phone"
                      rules={[{ required: true, message: '请您输入手机号' }]}
                    >
                      <Input
                        addonBefore={prefixSelector}
                        style={{ width: '100%', height: 40 }}
                        placeholder="可用于登录和找回密码"
                      />
                    </Form.Item>
                    <Form.Item>
                      <Row gutter={8}>
                        <Col span={12}>
                          <Form.Item
                            name="captcha"
                            noStyle
                            rules={[
                              {
                                required: true,
                                message: 'Please input the captcha you got!',
                              },
                            ]}
                          >
                            <Input
                              style={{ width: 184, height: 40 }}
                              placeholder="请输入验证码"
                            />
                          </Form.Item>
                        </Col>
                        <Col span={12} style={{ textAlign: 'right' }}>
                          <Button
                            style={{
                              width: 126,
                              height: 40,
                              fontSize: 12,
                              color: '#333',
                            }}
                          >
                            获取验证码
                          </Button>
                        </Col>
                      </Row>
                    </Form.Item>
                    <Form.Item shouldUpdate style={{ textAlign: 'center' }}>
                      {() => (
                        <Button
                          type="primary"
                          htmlType="submit"
                          disabled={
                            !form.isFieldsTouched(true) ||
                            !!form
                              .getFieldsError()
                              .filter(({ errors }) => errors.length).length
                          }
                        >
                          登录
                        </Button>
                      )}
                    </Form.Item>
                  </Form>
                </div>
              </TabPane>
            </Tabs>
          </div>
        </div>
        <div className={styles['login-box-footerBar']}>
          <div className={styles['login-box-footerBar-thirdParty']}>
            <a>
              <img src={require('../../../assets/bd-acc-qzone.png')} />
            </a>
            <a>
              <img src={require('../../../assets/bd-acc-tsina.png')} />
            </a>
            <a>
              <img src={require('../../../assets/bd-acc-weixin.png')} />
            </a>
          </div>
          <Link to="/register">立即注册</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
