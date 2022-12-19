import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import TabsTerms from './TabsTerms/TabsTerms';
import TabsPolicy from './TabsPolicy/TabsPolicy';
import TabsInformation from './TabsInformation/TabsInformation';
import TabsReport from './TabsReport/TabsReport';
import {
  WrapperLegal,
  ConverPanel,
  ConverContentPanel,
  ConverTabs,
  WrapperImage,
} from './Legal.style';

const { TabPane } = Tabs;

const Legal = () => {
  useEffect(() => {
    setTimeout(
      () =>
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        }),
      0
    );
  }, []);

  return (
    <>
      <WrapperLegal>
        <ConverPanel>
          {window.innerWidth >= 900 ? (
            <img
              src={'./BGLegal.webp'}
              width={'100%'}
              height={'100%'}
              zIndex={-100}
            />
          ) : (
            <img
              src={'./BGLegalMobile.png'}
              width={'100%'}
              height={'100%'}
              zIndex={-100}
            />
          )}

          <ConverContentPanel>
            {Window.innerWidth >= 1200 ? (
              <>
                <a>Legal</a>
                <span>
                  The Agency is fully commited to <br /> trust and transparency
                </span>
                <p>
                  At GHOST, our objective is to provide maximum security and
                  privacy for our clients. As such, to facilitate our services,
                  we do not require any personal identification such as email
                  address, phone number, or photo ID. <br />
                  <br /> We believe privacy is a basic human right. We do not
                  have access to any of your communications. Our end-to-end
                  encrypted infrastructure ensures that any communication
                  passing through our network remains private, only you and your
                  contacts have access.
                </p>
              </>
            ) : (
              <>
                <a>Legal</a>
                <span>
                  The Agency is fully commited to trust and transparency
                </span>
                <p>
                  At GHOST, our objective is to provide maximum security and
                  privacy for our clients. As such, to facilitate our services,
                  we do not require any personal identification such as email
                  address, phone number, or photo ID. We believe privacy is a
                  basic human right. We do not have access to any of your
                  communications. Our end-to-end encrypted infrastructure
                  ensures that any communication passing through our network
                  remains private, only you and your contacts have access.
                </p>
              </>
            )}
          </ConverContentPanel>
        </ConverPanel>
        <ConverTabs>
          <Tabs defaultActiveKey="1" type="card" size={'small'}>
            <TabPane tab="Terms Of Service" key="Terms_Of_Use">
              <ul>
                <li>
                  GHOST is designed to never collect or store any sensitive
                  information.
                </li>
                <li>
                  GHOST messages and calls cannot be accessed by us or other
                  third parties because they are always end-to-end encrypted,
                  private, and secure.
                </li>
                <li>
                  We want you to know your rights and obligations when using
                  GHOST applications (the Apps) and GHOST real-time secure
                  communication services (collectively, the Services).
                </li>
                <li>
                  Please read and understand our Terms of Service as they are a
                  legal, binding agreement between GHOST and you. By using our
                  Services, you confirm your acceptance of our Terms of Service.
                  If you do not agree to our Terms of Service, you may not use
                  our Services.
                </li>
              </ul>
              <TabsTerms />
            </TabPane>
            <TabPane tab="Privacy Policy" key="Privacy_Policy">
              <ul>
                <li>
                  We believe in transparency and want you to know how we handle
                  the limited personal information we may collect. This data is
                  collected in order to provide our secure communication
                  services (Services) or to allow you to interact with our
                  website located at <a href="">https://GoGhost.org/</a>{' '}
                  (Website).
                </li>
                <li>
                  We prepared this privacy policy (Privacy Policy), which should
                  be read together with our <a>Terms of Use</a>, to explain how
                  GHOST uses and protects your personal information. We have
                  made every effort to ensure clarity in our Privacy Policy.
                </li>
                <li>
                  You can contact us at any time by email at{' '}
                  <a>legal@GoGhost.org</a>
                  for any inquiries, questions, comments regarding your data and
                  personal information or this Privacy Policy.
                </li>
                <li>
                  By using our Services, you confirm your acceptance of our
                  Privacy Policy. If you do not agree to our Privacy Policy, you
                  may not use our Services.
                </li>
              </ul>
              <TabsPolicy />
            </TabPane>
            <TabPane
              tab="Information Request Guidelines"
              key="Information_Request_Guidelines"
            >
              <ul>
                <li>
                  GHOST is committed to operating in an environment of
                  transparency to foster the trust of users and the general
                  public towards its business practices and its Services.
                </li>
                <li>
                  In accordance with these Information Request Guidelines
                  (Guidelines), GHOST is committed to cooperating with law
                  enforcement authorities in achieving their legitimate public
                  mission, while respecting the privacy, confidentiality and
                  security expected by users.
                </li>
                <li>
                  GHOST will typically only release information (to the extent
                  it has the information requested) in compliance with Hong Kong
                  law to law enforcement authorities when compelled to do so by
                  court order, warrant, subpoena or other legal authority issued
                  by a court, person or body having jurisdiction.
                </li>
                <li>
                  We have prepared these Guidelines to describe how GHOST deals
                  with the law enforcement requests it receives. We want to make
                  sure that any disclosure made pursuant to such requests is
                  done in a manner which protects the privacy, confidentiality,
                  and security of users and their information.
                </li>
                <li>
                  You can contact us at any time by email at{' '}
                  <a>legal@GoGhost.org</a>
                  for any inquiries, questions, comments regarding these
                  Guidelines.
                </li>
              </ul>
              <TabsInformation />
            </TabPane>
            <TabPane tab="Transparency Report" key="Transparency_Report">
              <ul>
                <li>
                  GHOST is committed to operating in an environment of
                  transparency to foster the trust of the users and the general
                  public towards its business practices and its Services.
                </li>
                <li>
                  In this report, GHOST outlines the requests it received from
                  law enforcement authorities (including police and government
                  agencies) between 2018 and 2021 and how it responded to these
                  requests. For more information on how GHOST deals with law
                  enforcement requests, please see our{' '}
                  <a>Information Request Guidelines</a> (the Guidelines).
                </li>
                <li>
                  GHOST will typically only release End Users Information to law
                  enforcement authorities when compelled to do so by court
                  order, warrant, subpoena or other legal authority having
                  jurisdiction to compel GHOST to disclose the information.
                </li>
              </ul>
              <TabsReport />
            </TabPane>
          </Tabs>
          {window.innerWidth >= 1200 ? (
            <>
              <img
                src={'./ChildLegal.png'}
                style={{ position: 'absolute', left: '9vh', marginTop: '14vh' }}
              />
              <img
                src={'./ChildLegal1.png'}
                style={{
                  position: 'absolute',
                  right: '9vh',
                  marginTop: '47vh',
                }}
              />
              <img
                src={'./ChildLegal1.png'}
                style={{
                  position: 'absolute',
                  left: '9vh',
                  marginTop: '154vh',
                }}
              />
              <img
                src={'./ChildLegal2.png'}
                style={{
                  position: 'absolute',
                  right: '20vh',
                  marginTop: '106vh',
                }}
              />
            </>
          ) : null}
        </ConverTabs>
      </WrapperLegal>
    </>
  );
};
export default Legal;
