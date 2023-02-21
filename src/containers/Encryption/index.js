import React, { useEffect } from "react";
import { Row, Col } from "antd";
import styles from "./styled.module.scss";
import { Collapse } from "antd";
import ReactGA from "react-ga4";

const { Panel } = Collapse;

const Encryption = () => {
  useEffect(() => {
    ReactGA.send("pageview");
  }, []);
  return (
    <>
      {" "}
      <Row className={styles.rowContainer}>
        <Col span={24} className={styles.container}>
          <img src="/CoverEncryption.png" height={"1024px"} width={"auto"} />
        </Col>
        <Col span={20} className={styles.blockImage}>
          <div className={styles.blockLeft}>
            <h1>Encryption done right</h1>
            <div className={styles.blockTitle}>
              <p>
                Are your communications private? Are they
                <br />
                secure? Unless you encrypt them, the answer is <br />
                no. <br />
                <br />
                All messages you send over the Internet pass
                <br />
                through various servers before reaching their final
                <br />
                destination. They could be intercepted and read
                <br />
                at any point. For that reason, you need encryption
                <br />
                to guarantee your communication privacy and
                <br />
                security.
                <br />
                <br />
                The internet is public by designed, so your
                <br /> encryption must be handled properly to ensure
                <br /> all data sent over the internet is properly
                <br /> encrypted and secured.
              </p>
              <img src="/LineHeight.png" height={"350px"} width={"3px"} />
              <hr />
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
          <h1>
            A guarantee for{" "}
            <span>
              private and secure <br />
            </span>{" "}
            communications
          </h1>
          <p>
            Encryption is the process of scrambling information into an
            illegible state, useless
            <br /> to anyone without the key to decrypt it. It guarantees that
            you are the only one
            <br /> who can access your files and read your messages.
          </p>
          <div className={styles.wrapperBlock}>
            <div className={styles.blockKeyOne}>
              <img src="./itemKey1.png" width={"72px"} height={"72px"} />
              <h1>User-owned keys</h1>
              <p>
                All of Secure Group’s encrypted communication solutions work
                with keys owned by the user. They are generated on the user’s
                device and stored only there.
              </p>
            </div>
            <div className={styles.blockKeyOne}>
              <img src="./itemKey2.png" width={"72px"} height={"72px"} />
              <h1>No backdoors</h1>
              <p>
                Secure Group believes that a backdoor for one is a backdoor for
                all. Unlike some providers, Secure Group does not create
                intentional flaws in its cryptosystem to bypass encryption.
              </p>
            </div>
            <div className={styles.blockKeyOne}>
              <img src="./itemKey3.png" width={"72px"} height={"72px"} />
              <h1>Open-source</h1>
              <p>
                The open-source protocols used by Secure Group are subject to
                constant peer review. A large community of experts constantly
                upgrades the protocols to eliminate any room for flaws.
              </p>
            </div>
            <div className={styles.blockKeyOne}>
              <img src="./itemKey4.png" width={"72px"} height={"72px"} />
              <h1>Zero-access to data</h1>
              <p>
                We encrypt all data on the user’s side with a key that only the
                user has. Moreover, our decentralized network is designed around
                the concept of zero-knowledge, and no sensitive data is stored
                outside the communication devices.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      {/* SectionThree */}
      <Row className={styles.rowContainerThree}>
        <div className={styles.contentSectionThree}>
          <h1>
            Your data, secured by{" "}
            <span>
              multiple
              <br /> layers
            </span>{" "}
            of encryption
          </h1>
          <p>
            All incoming and outgoing communication is end-to-end encrypted and
            <br />
            transmitted over an encrypted and decentralized network. All data
            stored on <br />
            devices is secured and encrypted.
          </p>
        </div>
        <Col span={20} className={styles.colContainerThree}>
          <div className={styles.contentOne}>
            <div className={styles.blockImageData}>
              <img src="./encryption_1.png" />
            </div>
            <h1>Data encryption</h1>
            <Collapse defaultActiveKey={["1"]} ghost accordion height={"400px"}>
              <Panel header="Key generation" key="1">
                <p>
                  The process of encrypting your communications
                  <br />
                  starts even before you send your first message
                  <br />
                  with the generation of a cryptographic key/key
                  <br />
                  pair. No matter the communication channel
                  <br /> you've chosen, encryption keys are generated
                  <br />
                  on the device, and private keys are never stored
                  <br />
                  outside it.
                </p>
              </Panel>
              <Panel header="Message encryption" key="2">
                <p>
                  When you type in your message and press the
                  <br />
                  send button, your message is instantly encrypted
                  <br />
                  with the device-generated encryption keys. Our
                  <br />
                  products are secured by open-source encryption
                  <br /> protocols, which have been vetted numerous
                  <br />
                  times and have never been compromised.
                </p>
              </Panel>
              <Panel header="Secure key exchange" key="3">
                <p>
                  Once your message is encrypted and on its way to
                  <br />
                  the recipient, a secure key exchange occurs. Our
                  <br />
                  products rely on the proven Diffie-Hellman key
                  <br />
                  exchange algorithm, a method for securely exchanging
                  <br />
                  cryptographic keys over a public communications
                  <br /> channel.
                </p>
              </Panel>
              <Panel header="Session verification" key="4">
                <p>
                  This is an additional step available in peer-to-peer
                  <br /> chats and voice calls, designed to detect and
                  <br /> counter man in the middle (MITM) attacks. It
                  <br /> involves the two communicating parties sharing
                  <br /> a common secret, thus verifying their identities
                  <br /> and the security of the communication channel.
                </p>
              </Panel>
            </Collapse>
          </div>

          <div className={styles.contentTwo}>
            <div className={styles.blockImageData}>
              <img src="./encrytion_2.png" />
            </div>
            <h1>Data in transit</h1>
            <a>TLS encrypted network</a>
            <p>
              Your messages travel through our secure <br />
              communication network in an encrypted form.
              <br />
              The connection between different Encrypted
              <br />
              Communication Nodes (ECNs) is secured using the
              <br />
              TLS 1.2 protocol.
            </p>
          </div>
          <div className={styles.contentThree}>
            <div className={styles.blockImageData}>
              <img src="./encryption_3.png" />
            </div>
            <h1>Secured hardware</h1>
            <a>True hardware security</a>
            <p>
              True security calls for encrypting not just your
              <br />
              channels of communication but your device as well.
              <br />
              Encrypting your storage guarantees your data is
              <br />
              secure even if you lose your phone or someone
              <br />
              attempts to maliciously attack it. This is why we
              <br />
              made an antivirus firewall and triple password <br></br>protection
              integral and mandatory features of all our<br></br> devices.
            </p>
          </div>
        </Col>
      </Row>
      {/* SectionFor */}
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
export default Encryption;
