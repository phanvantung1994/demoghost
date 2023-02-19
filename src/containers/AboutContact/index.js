import React from "react";
import styles from "./styled.module.scss";
import { Row, Col, Form, Input, Button } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const AboutContact = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <>
      {/* section one */}
      <Row className={styles.rowContainer}>
        <Col span={24} className={styles.container}>
          <img src="/Ghost/Rectangle2.png" width={"auto"} />
        </Col>
        <Col span={20} className={styles.blockImage}>
          <div className={styles.blockLeft}>
            <a>CONTACT US!</a>
            <p>
              Do not hesitate to contact us with any
              <br />
              questions regarding our secure <br />
              communications solutions or the <br />
              process of becoming one of our <br /> partners.
            </p>
          </div>
          <div className={styles.blockRight}>
            <img src="/Ghost/Image2.png" width={"548px"} height={"auto"} />
          </div>
        </Col>
      </Row>

      {/* section two */}
      <Row className={styles.SectionTwo}>
        <Col span={18} className={styles.Content}>
          <div className={styles.CarrerContent}>
            <h1>
              <span>Share</span> your query and ideas
              <br />
              with us!
            </h1>
            <p>
              GHOST is committed to protecting and respecting your privacy, and
              we’ll only use
              <br />
              your personal information to administer your account and to
              provide the products
              <br />
              and services you requested from us.
              <br />
              <br />
              Please send a message using our contact form.
            </p>
          </div>
          <div className={styles.WrapperContact}>
            <Form
              {...layout}
              name="nest-messages"
              layout="vertical"
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              <div className={styles.WrapperForm}>
                <div className={styles.WrapperName}>
                  <Form.Item
                    label="First Name"
                    name={["user", "fname"]}
                    rules={[{ required: true }]}
                    style={{
                      display: "inline-block",
                      width: "calc(50% - 8px)",
                    }}
                  >
                    <Input size="large" placeholder="e.g.John" />
                  </Form.Item>
                  <Form.Item
                    label="Last Name"
                    name={["user", "lname"]}
                    rules={[{ required: true }]}
                    style={{
                      display: "inline-block",
                      width: "calc(50% - 8px)",
                    }}
                  >
                    <Input size="large" placeholder="e.g.Doe" />
                  </Form.Item>
                </div>
                <Form.Item
                  label="Email"
                  name={["user", "email"]}
                  rules={[{ type: "email", required: true }]}
                >
                  <Input size="large" placeholder="name@domain.com" />
                </Form.Item>
                <Form.Item label="Title" name={["user", "title"]}>
                  <Input size="large" placeholder="..." />
                </Form.Item>
                <Form.Item label="Message" name={["user", "introduction"]}>
                  <Input.TextArea rows={4} placeholder="Input message" />
                </Form.Item>
                <div className={styles.apply}>
                  <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                      SEND MESSAGE
                    </Button>
                  </Form.Item>
                </div>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default AboutContact;
