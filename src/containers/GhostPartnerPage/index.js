import React from "react";
import { Row, Col } from "antd";
import styles from "./styled.module.scss";

const GhostPartnerPage = () => {
  return (
    <>
      <Row className={styles.rowContainer}>
        <Col span={24} className={styles.container}>
          <img src="/RDLeftBg.jpg" height={"759px"} width={"auto"} />
        </Col>
        <Col span={24} className={styles.blockImage}>
          <Col span={20}>
            <div className={styles.blockLeft}>
              <h1>
                Become a GHOST <br />
                Partner
              </h1>
              <div className={styles.blockTitle}>
                <p>
                  Join us in building the most complete mobile
                  <br /> security solution in the world.
                </p>
                <img src="/LineHeight.png" height={"20px"} width={"5px"} />
                <hr />
              </div>
              <a className={styles.buttonBook}>Become a partner</a>
            </div>
          </Col>
          <img src="/partnerPage.png" width={"auto"} height={"463px"} />
        </Col>
      </Row>
      {/* Section Two */}
      <Row className={styles.rowContainerTwo}>
        <Col span={20} className={styles.colContainerTwo}>
          <h1>
            Enter a <span>fast-growing</span> market
          </h1>
          <p>
            Join one of GHOST’s partner programs and enter a fast-growing market
            with
            <br /> unlimited potential. According to researchers, the mobile
            security market is
            <br /> projected to reach $122.89 billion by 2027, with a compound
            annual growth rate of
            <br /> nearly 26%.
          </p>
          <div className={styles.blockMarket}>
            <div className={styles.blockMarketChildLeft}>
              <h1>Distribution partners</h1>
              <p>
                Accelerate the growth of our global secure
                <br />
                communication network by distributing encrypted
                <br /> mobile devices to local resellers and maintaining the
                <br /> supporting infrastructure.
              </p>
            </div>
            <div className={styles.blockMarketChildRight}>
              <img
                src="/GhostPartner/image_new_phone.png"
                width={"auto"}
                height={"463px"}
              />
            </div>
          </div>
        </Col>
      </Row>
      {/* Section Three */}
      <Row className={styles.rowContainerThree}>
        <Col span={24} className={styles.colContainerThree}>
          <Col span={20} className={styles.colContainerThreeChild}>
            <div className={styles.blockMarketChildRightChild}>
              <img
                src="/GhostPartner/image_new_phone1.png"
                width={"auto"}
                height={"463px"}
              />
            </div>
            <div className={styles.blockMarketChildLeftChild}>
              <h1>OEM partners</h1>
              <p>
                Integrate your software offering into GHOST OS, our
                <br /> proprietary security-focused mobile OS. Use one of
                <br /> our existing hardware platforms as the new vessel for
                <br />
                your software solution.
              </p>
            </div>
          </Col>
        </Col>
      </Row>
      {/* Section Four */}
      <Row className={styles.rowContainerFour}>
        <Col span={20} className={styles.colContainerFour}>
          <h1>
            Enjoy <span>benefits</span> crafted to help you succeed
          </h1>
          <p>
            From growing your customer base to sharpening your skills, our
            partner programs
            <br /> open new doors for your business.
          </p>
          <div className={styles.blockAll}>
            <div className={styles.blockOne}>
              <img
                src="./GhostPartner/item1-s3.png"
                width={"72px"}
                height={"72px"}
              />
              <h1>Offer a superior product</h1>
              <p>
                With a full suite solution approach, our products offer the most
                complete mobile security solution, and will prove their
                superiority in the mobile security market.
              </p>
            </div>
            <div className={styles.blockOne}>
              <img
                src="./GhostPartner/item2-s3.png"
                width={"72px"}
                height={"72px"}
              />
              <h1>Go-to-market fast</h1>
              <p>
                Our application, delivery, and onboarding processes are
                optimized to ensure that you can start selling as quickly as
                possible.
              </p>
            </div>
            <div className={styles.blockOne}>
              <img
                src="./GhostPartner/item3-s3.png"
                width={"72px"}
                height={"72px"}
              />
              <h1>Access training resources</h1>
              <p>
                Our extensive product, marketing, sales, and technical training
                courses are designed to set you up for success from day one.
              </p>
            </div>
            <div className={styles.blockOne}>
              <img
                src="./GhostPartner/item4-s3.png"
                width={"72px"}
                height={"72px"}
              />
              <h1>Receive qualified leads</h1>
              <p>
                We will send you qualified and relevant leads that apply through
                our marketing channels.
              </p>
            </div>
            <div className={styles.blockOne}>
              <img
                src="./GhostPartner/item5-s3.png"
                width={"72px"}
                height={"72px"}
              />
              <h1>Get 24/7 support</h1>
              <p>
                We are here to help. Our dedicated Partner Success team is
                available 24/7 to provide sales or technical support to you or
                your clients.
              </p>
            </div>
            <div className={styles.blockOne}>
              <img
                src="./GhostPartner/item6-s3.png"
                width={"72px"}
                height={"72px"}
              />
              <h1>Enjoy marketing support</h1>
              <p>
                Our marketing experts can help you every step of the way and
                ensure that your product becomes a commercial success.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      {/* Section Five  */}
      <Row className={styles.rowContainerFive}>
        <Col span={20} className={styles.colContainerFive}>
          <div className={styles.blockContentStep}>
            <h1>
              As <span>easy</span> as
              <br /> one, two, three
            </h1>
            <p>
              Entering the world of mobile security
              <br /> has never been easier. Our application
              <br /> and onboarding processes will have
              <br /> you all set in a manner of weeks.
            </p>
            <a className={styles.buttonBookBottom}>Become a partner</a>
          </div>
          <div className={styles.blockRightLight}>
            <div className={styles.blockLight}>
              <h1>1</h1>
              <div className={styles.blockSell}>
                <h3>Apply</h3>
                <p>
                  Fill out the partner application form, and our
                  <br /> representatives will guide you through the
                  <br /> process.
                </p>
              </div>
            </div>
            <div className={styles.blockLight}>
              <h1>2</h1>
              <div className={styles.blockSell}>
                <h3>Learn</h3>
                <p>
                  Complete the online or onsite training courses to
                  <br /> master our products and platforms.
                </p>
              </div>
            </div>
            <div className={styles.blockLight}>
              <h1>3</h1>
              <div className={styles.blockSell}>
                <h3>Sell</h3>
                <p>
                  Launch your product offering, start selling and
                  <br /> enjoy our professional after-sales support.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default GhostPartnerPage;
