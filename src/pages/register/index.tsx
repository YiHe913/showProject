import { useState, useEffect } from 'react';
import styles from './index.less';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {
  AutoComplete,
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from 'antd';
import { history, Link } from 'umi';

const Register = () => {
  const [form] = Form.useForm();
  const { Option } = Select;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 22,
        offset: 2,
      },
    },
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
    <div className={styles['register']}>
      <div className={styles['register-left']}>
        <h1>用科技</h1>
        <p>让复杂的世界更简单</p>
      </div>
      <div className={styles['register-content']}>
        <h2>欢迎注册</h2>
        <p>
          已有帐号？ <Link to="/Login">登录</Link>
        </p>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          colon={false}
          // onFinish={onFinish}
          initialValues={{
            prefix: '86',
          }}
          scrollToFirstError
        >
          <Form.Item
            name="useName"
            label="用户名"
            rules={[
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input
              style={{ width: '100%', height: 40 }}
              placeholder="请设置用户名"
            />
          </Form.Item>

          <Form.Item
            name="phone"
            label="手机号"
            rules={[{ required: true, message: '请您输入手机号' }]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{ width: '100%', height: 40 }}
              placeholder="可用于登录和找回密码"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label={<span>密&nbsp;&nbsp;&nbsp;&nbsp;码</span>}
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="请设置登录密码" />
          </Form.Item>

          <Form.Item label="验证码">
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

          <Form.Item
            name="agreement"
            valuePropName="checked"
            {...tailFormItemLayout}
          >
            <Checkbox>
              <span style={{ fontSize: 12, color: '#666' }}>
                阅读并接受《用户协议》 <a href="">《用户协议》</a>及{' '}
                <a href="">《隐私权保护声明》</a>
              </span>
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
