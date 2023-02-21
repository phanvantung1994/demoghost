import React, { useRef, useState, useEffect } from "react";
import styles from "./styled.module.scss";
import { Row, Col, Input, Button, notification, Spin } from "antd";
import emailjs from "@emailjs/browser";
import ReactGA from "react-ga";

const AboutCareer = () => {
  const [api, contextHolder] = notification.useNotification();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

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
        "template_wrsngbu",
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
          <img src="/Ghost/Rectangle.png" width={"auto"} />
        </Col>
        <Col span={20} className={styles.blockImage}>
          <div className={styles.blockLeft}>
            {/* <h1>SECURED ANONYMITY</h1> */}
            <a>
              JOIN <span>OUR TEAM</span> <br />
              AT GHOST
            </a>
            <p>
              Be part of the team shaping the future <br /> of cybersecurity.
            </p>
          </div>
          <div className={styles.blockRight}>
            <img src="/Ghost/Image.png" width={"548px"} height={"auto"} />
          </div>
        </Col>
      </Row>
      {/* section two */}
      <Row className={styles.SectionTwo}>
        <Col span={18} className={styles.Content}>
          <div className={styles.CarrerContent}>
            <h1>Career</h1>
            <p>
              If you care deeply about what we’re building and think you are a
              great fit, we’d
              <br />
              love to hear from you. GHOST is always looking for people with
              relentless drive,
              <br />
              high energy and exceptional ability.
              <br />
              <br />
              Please send email using our contact form.
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
                  Message*
                  <Input.TextArea
                    name="introduction"
                    rows={3}
                    placeholder="Input message"
                  />
                </label>
                <div className={styles.apply}>
                  <Button type="primary" htmlType="submit">
                    APPLY NOW
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
export default AboutCareer;
