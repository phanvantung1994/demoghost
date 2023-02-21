import React, { useEffect } from "react";
import styles from "./styled.module.scss";
import { Row, Col, Collapse } from "antd";
import ReactGA from "react-ga";

const { Panel } = Collapse;
const GhostMessPage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <>
      <Row className={styles.rowContainer}>
        <Col span={24} className={styles.container}>
          <img
            src="/GhostMess/Rectangle.png"
            height={"1024px"}
            width={"auto"}
          />
        </Col>
        <Col span={20} className={styles.blockImage}>
          <div className={styles.blockLeft}>
            <h1>
              <span>Powerful</span>
              <br /> communication and
              <br /> productivity features
            </h1>
            <div className={styles.blockTitle}>
              <p>
                To guarantee the privacy and the security of your data, <br />
                GHOST comes with our proprietary Secure Communication Suite.{" "}
                <br />
                The suite includes our state-of- the-art applications for
                end-to-end encrypted communications and secure file storage.
              </p>
              <img src="/LineHeight.png" height={"160px"} />
              <hr />
            </div>
          </div>
        </Col>
        <div className={styles.blockRight}>
          <img
            src="/GhostMess/Group_Image.png"
            width={"548px"}
            height={"719px"}
          />
        </div>
      </Row>
      {/* SectionTwo */}
      <Row className={styles.rowSectionTwo}>
        <Col span={20} className={styles.wrapperContentStay}>
          <h1>Stay connected</h1>
          <p>
            Communicate with your peers via military-grade secure communication
            <br />
            channels. Every communication gets encrypted on your device, travels
            in an
            <br /> indecipherable form, and gets decrypted on the receiver's
            device.
          </p>
        </Col>
        <Col span={20} className={styles.colCustom}>
          <div className={styles.wrapperStayConnectLeft}>
            <div className={styles.blockENF}>
              <h1>ENF Distorted Recordings</h1>
              <p>
                All audio or video recorded on our app along with audio and
                video calling are frequency distorted in order to remove the
                possibility of tracking your location through ENF analysis.
              </p>
              <img src="/PhoneCall_mess.png" height={"auto"} width={"100%"} />
            </div>
            <div className={styles.blockSecureChat}>
              <h1>Secure Group Chats</h1>
              <p>
                Create secure group chats that only store information until all
                members receive it.
              </p>
              <img
                src="/GhostMess/PhoneUp.png"
                height={"auto"}
                width={"100%"}
              />
            </div>
          </div>
          <div className={styles.blockPerfectForward}>
            <h1>Perfect Forward Secrecy</h1>
            <p>
              We use Perfect Forward Secrecy to ensure that your messages have
              the utmost security, allowing us to keep you safe even in events
              of malicious attacks.
            </p>
            <div className={styles.blockImageForward}>
              <img
                src="/GhostMess/Message_Secret.png"
                height={"auto"}
                width={"100%"}
              />
            </div>
          </div>
          <div className={styles.wrapperStayConnectRight}>
            <div className={styles.blockZeroTrace}>
              <h1>Zero Trace</h1>
              <p>
                No data is stored on the device removing the possibility of data
                retrieval from a stolen/lost device.
              </p>
              <div className={styles.blockImagePhoneZero}>
                <img
                  src="/GhostMess/PhoneUp1.png"
                  height={"auto"}
                  width={"100%"}
                />
              </div>
            </div>
            <div className={styles.blockAccountManagement}>
              {" "}
              <h1>
                Account Management &nbsp; <img src="/Account_mess.svg" />
              </h1>
              <p>
                Our full suite management platform allow you to wipe an account
                remotely and recover accounts using your mnemoric seed.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      {/* SectionThree */}
      <Row className={styles.rowSectionThree}>
        <Col span={20} className={styles.wrapperContentStay}>
          <h1>
            Stay <span>productive</span>
          </h1>
          <p>
            Benefit from an interoperability layer most secure mobile devices
            lack.
            <br />
            Keep all your files, work documents, business-specific apps, and
            even your
            <br /> schedule under control.
          </p>
        </Col>
        <Col span={20} className={styles.colCustom}>
          <div className={styles.blockPerfectForwardBot}>
            <h1>Secure calendar</h1>
            <p>
              Organize your schedule, set reminders,
              <br /> create custom events, and securely
              <br /> share them with your peers through
              <br /> GHOST Chat.
            </p>
            <div className={styles.blockImageForward}>
              <img
                src="/GhostMess/Phone_GhostMess.png"
                height={"auto"}
                width={"100%"}
              />
            </div>
          </div>
          <div className={styles.wrapperStayConnectLeftBot}>
            <div className={styles.blockENFBot}>
              <h1>Secure file storage</h1>
              <p>
                Securely store and catalog your photos, videos, voice memos,
                messages, and even entire conversations.
              </p>
              <div className={styles.blockImagePhoneproduct}>
                <img
                  src="/GhostMess/Group8.png"
                  height={"auto"}
                  width={"100%"}
                />
              </div>
            </div>
            <div className={styles.blockSecureChatBot}>
              <h1>Trusted applications</h1>
              <p>
                Integrate your business-specific
                <br /> applications into GHOST OS. The apps
                <br /> operate in an isolated environment and
                <br /> are automatically scanned for
                <br /> vulnerabilities.
              </p>
              <div className={styles.blockImagePhoneZero}>
                <img src="/Cloud_product.png" height={"auto"} width={"100%"} />
              </div>
            </div>
          </div>
          <div className={styles.wrapperStayConnectRightBot}>
            <div className={styles.blockZeroTraceBot}>
              <h1>Secure notes</h1>
              <p>
                Take memos and store them securely in
                <br /> an encrypted format.
              </p>
              <div className={styles.blockImagePhoneproduct1}>
                <img
                  src="/GhostMess/Phone_GhostMess1.png"
                  height={"auto"}
                  width={"100%"}
                />
              </div>
            </div>
            <div className={styles.blockAccountManagementBot}>
              <h1>Currency converter</h1>
              <p>
                Check exchange rates directly on your device, including Fiat to
                cryptocurrency rates.
              </p>
              <div className={styles.blockImagePhoneproduct1}>
                <img
                  src="/Demo_product_currency.png"
                  height={"auto"}
                  width={"100%"}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      {/* SectionFour */}
      <Row className={styles.rowContainerThree}>
        <Col span={20} className={styles.colContainerThree}>
          <div className={styles.contentOne}>
            <h1>
              Endless <span>customization</span> options
            </h1>
            <p>
              GHOST OS allows you to create a truly unique product for your
              <br />
              organization or target market. Customize the look and feel of your
              <br />
              secure devices and make sure they fit your existing corporate
              <br />
              branding or your vision for a new and disruptive security product.
            </p>
            <Collapse defaultActiveKey={["1"]} ghost accordion height={"400px"}>
              <Panel header="App or dashboard view" key="1">
                <p>
                  Choose between our intuitive easy-access
                  <br />
                  dashboard or a more conventional home
                  <br />
                  screen with app icons.
                </p>
              </Panel>
              <Panel header="Dark or light mode" key="2">
                <p>
                  Set a light or a dark theme for your devices, to create the
                  look and
                  <br /> feel you desire.
                </p>
              </Panel>
              <Panel header="Custom colors" key="3">
                <p>
                  Set custom accent colors and make the device a reflection of
                  your
                  <br /> branding.
                </p>
              </Panel>
              <Panel header="Unique boot animation" key="4">
                <p>
                  Make the first interaction of users with the device a truly
                  unique
                  <br /> experience by customizing the boot screen and
                  animation.
                </p>
              </Panel>
            </Collapse>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default GhostMessPage;
