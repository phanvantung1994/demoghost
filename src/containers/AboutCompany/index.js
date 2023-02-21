import React, { useEffect } from "react";
import styles from "./styled.module.scss";
import { Row, Col } from "antd";
import ReactGA from "react-ga";

const AboutCompany = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <>
      {/* section one */}
      <Row className={styles.SectionOne}>
        <Col span={24} className={styles.rowContainer}>
          Secured Anonimity
        </Col>
      </Row>
      {/* section two */}
      <Row className={styles.SectionTwo}>
        <Col span={18} className={styles.Content}>
          <h1>Who We Are</h1>
          <p>
            Our corporation consists of mobile security experts whose sole
            mission is to preserve the anonymity of our clients and to ensure
            the security and integrity of their data.
          </p>
          <h1>Why GHOST?</h1>
          <p>
            It takes just one lapse in anonymity to undo years of trying to be
            anonymous. If you are a high-profile person and your online presence
            is not private, you and your organization will most likely be
            targeted by malicious attackers. According to the World Economic
            Forum, 95% of cyber-security breaches are caused by human errors,
            which proves statistically that the weakest link in a system's
            security is the user and not the system itself.
            <br />
            At GHOST, we take measures to completely remove the possibility of
            human errors so your organization can securely operate in the new
            age of the Internet.
          </p>

          <h1>The GHOST Difference</h1>
          <p>
            Security has and will always be layered, and even when you stack
            many layers and those layers are tight, you could be exposed and not
            even know it. GHOST recognizes this and has chosen this to be our
            task. Our team works full time to research and innovate to protect
            our clients in the ever changing and dynamic scene that is
            cyber-security.
          </p>
          <h1>Can I Trust GHOST?</h1>
          <p>
            At GHOST, we codes with the worst case scenarios in mind. Even if
            our servers were to be compromised, the worst thing the attacker
            could do is delay messages from being sent in a timely fashion.
            <br />
            Your data is 100% encrypted before leaving your device meaning any
            data our service facilitate is already encrypted, so even in the
            worst case scenarios we cannot access any of your messages or data.
            <br />
            We cannot send your messages to an unintended recipient as that
            recipient would not have the key required to decrypt your messages.
            <br />
            We cannot replay your past messages as each message utilizes a
            uniquely generated sequence. We do not want your data. We only
            collect the minimum to facilitate our services.
          </p>
        </Col>
      </Row>
    </>
  );
};
export default AboutCompany;
