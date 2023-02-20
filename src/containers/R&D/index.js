import React from "react";
import { Col, Row } from "antd";
import styles from "./styled.module.scss";
import Slide from "./Slide";
import { RightCircleOutlined } from "@ant-design/icons";

const RAndD = () => {
  return (
    <>
      <Row className={styles.rowContainer}>
        <Col span={24} className={styles.container}>
          <img src="/RDLeftBg.jpg" height={"1024px"} width={"auto"} />
        </Col>
        <Col span={20} className={styles.blockImage}>
          <div className={styles.blockLeft}>
            <h1>GHOST R&D services</h1>
            <div className={styles.blockTitle}>
              <p>
                Elevate your organization to the most secured
                <br /> mobile operating system and business
                <br /> applications suite in the world.
              </p>
              <img src="/LineHeight.png" height={"15px"} width={"4px"} />
            </div>
          </div>
          <div className={styles.blockRight}>
            <img src="/GhostAD/Image_Ad.png" width={"593px"} height={"639px"} />
          </div>
        </Col>
      </Row>
      <Row className={styles.rowContainerSecond}>
        <Col span={20} className={styles.colContainerSecond}>
          <a className={styles.overview}>
            From an idea to <br /> a commercial <span>product</span>
          </a>
          <p>
            Take your project to the next level with Secure Group's professional
            software and <br /> hardware R&D services. Our team can help you
            every step of the way, from <br /> technology consulting and
            solution architecture, through design and prototyping,
            <br /> to full-scale product production.
          </p>
          <a className={styles.LearMore}>
            <img src="/ButtonMore.png" width={"58px"} height={"48px"} />
            Download R&D services overview
          </a>
          <div className={styles.coverSlide}>
            <div className={styles.blockSlide}>
              <Slide />
            </div>
          </div>
        </Col>
      </Row>
      <Row className={styles.rowContainerThree}>
        <Col span={24} className={styles.blockImagesRD}>
          <img
            src="/GhostAD/image_sec_Ad.png"
            height={"550px"}
            width={"auto"}
          />
        </Col>
        <Col span={24} className={styles.colContainerThree}>
          <Col span={20} className={styles.wrapperContentThree}>
            <h1>Software R&D</h1>
            <p>
              Our software R&D team has experience with Android,
              <br /> Linux, iOS, and all major chipset platforms. Depending
              <br /> on the requirements and time frame of your project,
              <br /> we may integrate proprietary Secure Group
              <br /> components (Secure OS, Secure Chat, and SAS), or
              <br /> other third-party components in order to accelerate
              <br /> the development process.
            </p>
            <a className={styles.LearMore}>
              <img src="/ButtonMore.png" width={"58px"} height={"48px"} />
              Learn more
            </a>
          </Col>
        </Col>
      </Row>
      {/* Row For */}
      <Row className={styles.rowContainerFour}>
        <Col span={24} className={styles.blockImagesRD}>
          <img
            src="/GhostAD/image_sec2_ad.png"
            height={"550px"}
            width={"auto"}
            position={"absolute"}
          />
        </Col>
        <Col span={24} className={styles.colContainerFour}>
          <Col span={20} className={styles.wrapperContentFour}>
            <h1>Hardware R&D</h1>
            <p>
              Our hardware R&D team has a diverse background
              <br /> ranging from working on small-scale proof-of-concept
              <br /> projects to full-blown product design and
              <br /> production. Base your project on one of our existing
              <br /> hardware platforms for fast turnaround times or start
              <br />
              from scratch to design a unique product. Additionally,
              <br /> our ISO 9001 certified assembly facilities are ready to
              <br /> ramp up production.
            </p>
            <a className={styles.LearMore}>
              <img src="/ButtonMore.png" width={"58px"} height={"48px"} />
              Learn more
            </a>
          </Col>
        </Col>
      </Row>
      {/* Row Five */}
      <Row className={styles.rowContainerFive}>
        <Col span={20} className={styles.colContainerFive}>
          <div>
            <h1>Book a consultation</h1>
            <p>Contact us and we will connect you to one of our R&D experts.</p>
          </div>
          <a className={styles.buttonBookBottom}>Book a consultation</a>
        </Col>
      </Row>
    </>
  );
};
export default RAndD;
