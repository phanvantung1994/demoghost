import React, { useEffect } from "react";
import { Row, Col } from "antd";
import styles from "./styled.module.scss";
import ReactGA from "react-ga4";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const GhostOSPage = () => {
  useEffect(() => {
    ReactGA.send("pageview");
  }, []);
  return (
    <>
      <Row className={styles.rowContainer}>
        <Col span={24} className={styles.container}>
          {/* <img src="/CoverEncryption.png" height={"1024px"} width={"auto"} /> */}
        </Col>
        <Col span={20} className={styles.blockImage}>
          <div className={styles.blockLeft}>
            <h1>
              <span>GHOST OS</span>
              <br />
              Security and privacy first
              <br /> mobile operating system
            </h1>
            <div className={styles.blockTitle}>
              <p>
                GHOST OS is a custom operating system based on
                <br />
                AOSP. It utilizes multiple defense layers to isolate,
                <br /> encrypt, and secure your data against any mobile
                <br /> threat.
              </p>
              <div className={styles.blockLeftFive}>
                <a>
                  {" "}
                  <p>Book a demo</p>
                </a>
                <a className={styles.LearMore}>
                  <img src="/ButtonMore.png" width={"58px"} height={"48px"} />
                  <span>Learn more</span>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.blockRight}>
            {/* <img src="/BgHomeNew.png" width={"548px"} height={"719px"} /> */}
          </div>
        </Col>
      </Row>
      {/* SectionTwo */}
      <Row className={styles.rowContainerTwo}>
        <Col span={20} className={styles.colContainerTwo}>
          <div className={styles.masterBlockCard}>
            <div
              className={styles.blockCard}
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <img src="/Vector.png" width={"65px"} height={"auto"} />
              <h1>Secure to the core</h1>
              <p>
                The threat landscape is ever-evolving, and so does GHOST OS. The
                system is secured on every level and constantly updated to keep
                it vulnerability-free.
              </p>
            </div>
            <div
              className={styles.blockCard}
              data-aos="fade-up"
              data-aos-offset="140"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <img src="/Vector2.png" width={"65px"} height={"auto"} />
              <h1>Private by design</h1>
              <p>
                We value privacy, and this is reflected in our products. GHOST
                OS is designed to keep all your sensitive data private and under
                your control.
              </p>
            </div>
            <div
              className={styles.blockCard}
              data-aos="fade-up"
              data-aos-offset="180"
              data-aos-delay="350"
              data-aos-duration="2000"
            >
              <img src="/Vector3.png" width={"65px"} height={"auto"} />
              <h1>Endless configurability</h1>
              <p>
                Different user segments have different needs and are trying to
                mitigate different risks. GHOST OS offers numerous
                configurations to meet a wide range of requirements.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      {/* SectionThree */}
      <Row className={styles.rowContainerThree}>
        <Col className={styles.colContainerThree}>
          <div className={styles.colContainerThreeContent}>
            <h1>
              360° <span>protection</span>
            </h1>
            <p>
              Attacks against mobile devices are getting more and more advanced.
              <br />
              Different parties with malintent can quickly obtain a fingerprint
              of your device, find
              <br /> vulnerabilities, and exploit them. To prevent this, we have
              developed a military-
              <br />
              grade mobile OS that is secure on every level.
            </p>
          </div>
          <div className={styles.blockAlleight}>
            <div className={styles.blockOne}>
              <img src="./BlockOneOs.png" width={"72px"} height={"72px"} />
              <h1>Zero-attack surface</h1>
              <p>
                All easily exploitable entry points of modern mobile devices
                (Google services, GSM services, SMS, Bluetooth, NFC, GPS, etc.)
                have been closed off in GHOST OS.
              </p>
            </div>
            <div className={styles.blockTwoImage}>
              {" "}
              <img
                src="./GhostOs/Phone-GhostOS.png"
                width={"auto"}
                height={"680px"}
              />
              {/* <h1>IMAGE</h1>
              <p>
                All easily exploitable entry points of modern mobile devices
                (Google services, GSM services, SMS, Bluetooth, NFC, GPS, etc.)
                have been closed off in GHOST OS.
              </p> */}
            </div>
            <div className={styles.blockThree}>
              {" "}
              <img src="./BlockTwoOs.png" width={"72px"} height={"72px"} />
              <h1>Multiple levels of encryption</h1>
              <p>
                Incoming and outgoing communication is end-to-end encrypted and
                transmitted over an encrypted network. No data is stored on the
                device to prevent malicious device attacks.
              </p>
            </div>
            <div className={styles.blockFour}>
              {" "}
              <img src="./BlockThreeOs.png" width={"72px"} height={"72px"} />
              <h1>Verified boot</h1>
              <p>
                During enrollment, a unique device fingerprint is created. On
                every boot, the device fingerprint is validated against a
                server-side copy to ensure the integrity and authenticity of the
                OS.
              </p>
            </div>
            <div className={styles.blockFive}>
              {" "}
              <img src="./BlockFourOs.png" width={"72px"} height={"72px"} />
              <h1>Secure KeyStore</h1>
              <p>
                All encryption keys are generated on the device and stored on a
                FIPS 140-2 certified cryptographic module. No private keys are
                ever shared or stored outside the device.
              </p>
            </div>
            <div className={styles.blockSix}>
              {" "}
              <img src="./BlockFiveOs.png" width={"72px"} height={"72px"} />
              <h1>Triple password protection</h1>
              <p>
                The device's storage, OS, and secure applications are all
                protected by separate passphrases, each set to trigger a wipe
                sequence if mistaken a consecutive number of times.
              </p>
            </div>
            <div className={styles.blockSeven}>
              {" "}
              <div className={styles.blockSevenChild}>
                <p>
                  Download our white paper and learn more about the extensive
                  security features of GHOST OS.
                </p>
              </div>
            </div>
            <div className={styles.blockEight}>
              {" "}
              <img src="./BlockSixOs.png" width={"72px"} height={"72px"} />
              <h1>Trusted updates</h1>
              <p>
                Updates are issued and digitally signed exclusively through the
                our administration system. Devices apply updates only after
                verifying the authenticity of the digital signature.
              </p>
            </div>
            <div className={styles.blockNine}></div>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default GhostOSPage;
