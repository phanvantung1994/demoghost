import React, { useEffect } from 'react';
import {
  WrapperLayout,
  WrapperContact,
  ContactContent,
  WrapperForm,
  WrapperFormLeft,
  WrapperFormRight,
} from './Career.style';
import { Button, Form, Input } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const Career = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };
  useEffect(() => {
    setTimeout(
      () =>
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        }),
      0
    );
  }, []);
  return (
    <>
      <WrapperLayout>
        {window.innerWidth >= 900 ? (
          <img
            src={'./BGContact.png'}
            alt="BGContact"
            width={'100%'}
            height={'100%'}
          />
        ) : (
          <img
            src={'./BGContactMobile.png'}
            alt="BGContactMobile"
            width={'100%'}
            height={'100%'}
          />
        )}

        {window.innerWidth >= 1080 ? (
          <>
            <img
              src={'./ChildContactLeft.png'}
              alt="ChildContactLeft"
              style={{ position: 'absolute', top: '23vh', left: '15vh' }}
            />
            <img
              src={'./ChildContactRight.png'}
              alt="ChildContactRight"
              style={{ position: 'absolute', bottom: '20vh', right: '10vh' }}
            />
          </>
        ) : null}

        <WrapperContact>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <WrapperForm>
              <WrapperFormLeft>
                <Form.Item name={['user', 'name']} rules={[{ required: true }]}>
                  <Input size="large" placeholder="Input your name" />
                </Form.Item>
                <Form.Item name={['user', 'email']} rules={[{ type: 'email' }]}>
                  <Input size="large" placeholder="Input your email " />
                </Form.Item>
                <Form.Item name={['user', 'website']}>
                  <Input size="large" placeholder="Subject" />
                </Form.Item>
                <Form.Item name={['user', 'introduction']}>
                  <Input.TextArea rows={7} placeholder="Input message" />
                </Form.Item>
              </WrapperFormLeft>
              <WrapperFormRight>
                <ContactContent>
                  <span>Work at GHOST!</span> <hr style={{ width: '100%' }} />{' '}
                  <p>
                    If you care deeply about what we’re building and think you
                    are a great fit, we’d love to hear from you. The Agency is
                    always looking for people with relentless drive, high energy
                    and exceptional ability.
                  </p>
                </ContactContent>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </WrapperFormRight>
            </WrapperForm>
          </Form>
        </WrapperContact>
      </WrapperLayout>
    </>
  );
};
export default Career;
