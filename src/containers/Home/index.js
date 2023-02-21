import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import styles from "./styled.module.scss";
import LazyLoad from "react-lazyload";
import SlideDemo from "./Slides/index";
import ReactGA from "react-ga4";

const Home = () => {
  // Handle scroll run number
  const [count, setCount] = useState(0);
  useEffect(() => {
    ReactGA.send("pageview");
  }, []);
  useEffect(() => {
    if (offsetTop && count < 180) {
      const id = setInterval(() => setCount((item) => item + 1), 10);
      return () => {
        clearInterval(id);
      };
    }
  });

  const [offsetTop, setOffSetTop] = useState(false);
  const isTop = 1750 || 100; // check position mouse
  const handleOnScroll = () => {
    console.log(window.pageYOffset, offsetTop, "Windows position");
    if (window.pageYOffset > isTop) {
      setOffSetTop(true);
    } else {
      setOffSetTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll);
    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, [isTop, handleOnScroll]);
  // Handle scroll run number

  return (
    <>
      <Row className={styles.rowContainer}>
        <Col span={24} className={styles.container}>
          <img
            src="/GhostHome/Rectangle_Home.png"
            width={"auto"}
            height={"100%"}
          />
        </Col>
        <Col span={20} className={styles.blockImage}>
          <div className={styles.blockLeft}>
            <h1>SECURED ANONYMITY</h1>
            <a>
              TRUSTED BY TOP FIRMS <br />
              AROUND THE WORLD
            </a>
            <p>
              Built from the ground up and designed <br /> for maximum security.
            </p>
          </div>
          <div className={styles.blockRight}>
            <img
              src="/GhostHome/Group_Home.png"
              width={"548px"}
              height={"719px"}
            />
          </div>
        </Col>
      </Row>
      <Row className={styles.rowContainerSecond}>
        <Col span={20}>
          <LazyLoad once={true} height={"938px"} className={styles.sectiontwo}>
            <div className={styles.blockLeftSectiontwo}>
              <h1>GHOST</h1>
              <h4>SECURED ANONYMITY</h4>
              <a>
                <img src="/ButtonMore.png" />
                Learn more
              </a>
              <div className={styles.titleProtec}>
                360° <span>protection</span>
                <p>
                  Secure communication solutions that provide absolute data
                  security and communication privacy for businesses,
                  governments, and individuals.
                </p>
              </div>
            </div>
            <div className={styles.blockRightSectiontwo}>
              <div className={styles.gridBlockSctiontwo}>
                <a className={styles.blockGridone}>
                  <a>GHOST Messenger</a>
                  <img
                    src="/PhoneBlock1.png"
                    width={"312px"}
                    height={"142px"}
                  />{" "}
                </a>
                <a className={styles.blockGritwo}>
                  <a>
                    GHOST Partners
                    <br /> System
                  </a>{" "}
                  <div>
                    <img
                      src="/PhoneBlock3.png"
                      width={"312px"}
                      height={"272px"}
                    />
                  </div>
                </a>
                <a className={styles.blockGrithree}>
                  <a>Ghost OS</a>
                  <img
                    src="/PhoneBlock2.png"
                    width={"315px"}
                    height={"308px"}
                  />
                </a>
              </div>
            </div>
          </LazyLoad>
        </Col>
      </Row>
      {/* SectionThree */}
      <Row className={styles.rowContainerThree}>
        <Col span={20}>
          <div>
            <h1>We are Secure Group</h1>
            <p>
              We live in a digital world, where data has become the most <br />
              valuable commodity, and the number of parties with the <br />
              technological means to intercept, monitor, or exploit this data is
              <br />
              growing exponentially.{" "}
            </p>
            <p>
              Our goal is to give you the means to navigate this digital space
              and <br /> communicate through mobile without worrying about the
              security <br />
              and privacy of your data.{" "}
            </p>
            <p>
              For over a decade, we have been the trusted partner of SMEs,
              <br />
              government agencies, and institutional clients, who rely on our{" "}
              <br />
              technology for securing their mission-critical communications.
            </p>
          </div>
          <div className={styles.wrapperBlock}>
            <div className={styles.blockNumber}>
              <div>
                <h1>{count < 20 ? count : 20}K</h1>
                <p>Users around the world</p>
              </div>
              <img src="/Line1.png" height={"140px"} />
              <div>
                <h1>{count < 60 ? count : 60}+</h1>
                <p>Dedicated team members</p>
              </div>
            </div>
            <div className={styles.blockNumber}>
              <img
                src="/Line1.png"
                height={"140px"}
                className={styles.blockChild}
              />
              <div>
                <h1 className={styles.block180}>
                  <span>{count < 180 ? count : 180}</span>+
                </h1>
                <p>Countries service coverage</p>
              </div>
              <img src="/Line1.png" height={"140px"} />
              <div>
                <h1 className={styles.block99}>
                  {count < 100 ? count : 99}.9%
                </h1>
                <p>Uptime</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      {/* SlideDemo */}
      <Row className={styles.rowContainerSix}>
        <Col span={20} className={styles.colContainerSix}>
          <a>
            Secure <span>your business</span> data
          </a>
          <p>
            Different industries have different communication needs. As a
            result, they face <br /> different threat models – which, in turn,
            calls for different security setups. There is <br /> no
            one-size-fits-all solution to secure your business communications.
            Our secure <br />
            communication solutions are designed to be flexible and scalable to
            meet the <br /> needs of different sectors.
          </p>
          <SlideDemo />
        </Col>
      </Row>
      {/* SectionFour */}
      <Row className={styles.rowContainerFour}>
        <Col span={20} className={styles.colContainerFour}>
          <div className={styles.inLineText}>
            Latest news <span>from Ghost</span>
          </div>
          <div className={styles.blockAllSectionFour}>
            <div className={styles.blockOneInSectionFour}>
              <img src="/GhostChatPhoto.png" width={"auto"} height={"220"} />
              <a>Ghost Chat 2.1.0: Streamlining the User Experience</a>
              <p>
                20th Oct 2022 · By &nbsp;<a>Ghost Agency</a>{" "}
              </p>
            </div>
            <div className={styles.blockOneInSectionFour}>
              <img src="/GhostOSPhoto.png" width={"auto"} height={"220"} />
              <a>Ghost OS 2.1.0: Better User experience</a>
              <p>
                20th Oct 2022 · By &nbsp;<a>Ghost Agency</a>{" "}
              </p>
            </div>
            <div className={styles.blockOneInSectionFour}>
              <img src="/GhostChatPhoto20.png" width={"auto"} height={"220"} />
              <a>Secure Chat 2.0.0: Enhanced Group Chat Anonymity</a>
              <p>
                20th Oct 2022 · By &nbsp;<a>Ghost Agency</a>{" "}
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className={styles.rowContainerFive}>
        <Col span={20} className={styles.colContainerFive}>
          <div className={styles.blockLeftFive}>
            Book a personalized demo <a>Book a demo</a>
          </div>
          <img src="/PhoneSec5.png" height={"250px"} width={"auto"} />
        </Col>
      </Row>
    </>
  );
};
export default Home;
