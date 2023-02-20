import React, { useRef, useState } from "react";
import styles from "./styled.module.scss";
import { Row, Col, Input, Button, notification, Spin } from "antd";
import emailjs from "@emailjs/browser";

const AboutContact = () => {
  const [api, contextHolder] = notification.useNotification();
  const [loading, setLoading] = useState(false);
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Success",
      description:
        "Thank you for your feedback, we will contact you as soon as possible.",
    });
  };
  const form = useRef();
  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_loniryn",
        "template_gq4wuj9",
        form.current,
        "QdAoXTA_Nf8iktmvf"
      )
      .then(
        (result) => {
          console.log(result);
          result.status == 200 && openNotificationWithIcon("success");
          setLoading(false);
        },
        (error) => {
          openNotificationWithIcon("error");
        }
      );
  };
  return (
    <>
      {contextHolder}
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
            <img
              src="/GhostAD/Image_About_Contact.png"
              width={"548px"}
              height={"auto"}
            />
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
            <form
              ref={form}
              name="nest-messages"
              layout="vertical"
              onSubmit={sendEmail}
            >
              <div className={styles.WrapperForm}>
                <div className={styles.WrapperName}>
                  <label style={{ width: "48%" }}>
                    Fname*
                    <Input
                      required={true}
                      name="fname"
                      size="large"
                      placeholder="e.g.John"
                    />
                  </label>
                  <label style={{ width: "48%" }}>
                    lname*
                    <Input
                      name="lname"
                      required={true}
                      size="large"
                      placeholder="e.g.Doe"
                    />
                  </label>
                </div>
                <label>
                  Email*
                  <Input
                    type="email"
                    name="email"
                    required={true}
                    size="large"
                    placeholder="name@domain.com"
                  />
                </label>
                <label>
                  Title*
                  <Input name="title" size="large" placeholder="..." />
                </label>
                <label>
                  Message*
                  <Input.TextArea
                    name="introduction"
                    rows={3}
                    placeholder="Input message"
                  />
                </label>
                <div className={styles.apply}>
                  <Button type="primary" htmlType="submit">
                    SEND MESSAGE
                  </Button>
                  {loading && <Spin style={{ marginTop: "10px" }} />}
                </div>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default AboutContact;
