import React, { useEffect } from 'react';
import {
  WrapperAgency,
  AgencyTop,
  AgencyBottom,
  ContainerTop,
  AgencyBottomImage,
} from './TheAgency.style';

const TheAgency = () => {
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
      <WrapperAgency>
        <ContainerTop>
          {/* <img
            src="./BackGroundAgency.jpg"
            alt="BackGroundBlack"
            width={'100%'}
            height={'100%'}
          /> */}
          <AgencyTop>
            {window.innerWidth >= 1080 ? (
              <>
                <img
                  src={'./Child3.png'}
                  alt="Child3"
                  style={{ position: 'absolute', left: '4vh', top: '-2vh' }}
                />
                <img
                  src={'./Child8.png'}
                  alt="Child8"
                  style={{ position: 'absolute', left: '2vh', top: '2vh' }}
                />
                <img
                  src={'./Child9.png'}
                  alt="Child9"
                  style={{ position: 'absolute', right: '-13vh', top: '21vh' }}
                />
              </>
            ) : null}
            <span>THE AGENCY</span> <br />
            <br />
            <br />
            <a href="">Who We Are</a>
            <br />
            <br />
            <p>
              The Agency are mobile security experts whose sole mission is to
              preserve the anonymity of our clients and to ensure the security
              and integrity of their data.
            </p>
            <a href="">Why The Agency?</a>
            <br />
            <br />
            <p>
              It takes just one lapse in anonymity to undo years of trying to be
              anonymous. If you are a high-profile person and your online
              presence is not private, you and your organization will most
              likely be targeted by malicious attackers. According to the World
              Economic Forum, 95% of cybersecurity breaches are caused by human
              errors, which proves statistically that the weakest link in a
              system's security is the user and not the system itself.
              <br />
              At the Agency, we take measures to completely remove the
              possibility of human errors so your organization can securely
              operate in the new age of the Internet.
            </p>
            <a href="">The Agency Difference</a>
            <br />
            <br />
            <p>
              Security has and will always be layered, and even when you stack
              many layers and those layers are tight, you could be exposed and
              not even know it. The Agency recognizes this and has chosen this
              to be our task. Our team works full time to research and innovate
              to protect our clients in the ever changing and dynamic scene that
              is cybersecurity.
            </p>
            <a href="">Can I Trust the Agency?</a>
            <br />
            <br />
            {window.innerWidth >= 1200 ? (
              <>
                <p>
                  The Agency codes with the worst case scenarios in mind. Even
                  if our servers were to be compromised, the worst thing the
                  attacker could do is delay messages from being sent in a
                  timely fashion.
                  <br /> <br />
                  Your data is 100% encrypted before leaving your device meaning
                  any data our service facilitate is already encrypted, so even
                  in the worst case scenarios we cannot access any of your
                  messages or data.
                  <br /> <br />
                  We cannot send your messages to an unintended recipient as
                  that recipient would not have the key required to decrypt your
                  messages.
                  <br />
                  <br />
                  We cannot replay your past messages as each message utilizes a
                  uniquely generated sequence.
                  <br />
                  We do not want your data. We only collect the minimum to
                  facilitate our services.
                </p>
              </>
            ) : (
              <>
                <p>
                  The Agency codes with the worst case scenarios in mind. Even
                  if our servers were to be compromised, the worst thing the
                  attacker could do is delay messages from being sent in a
                  timely fashion. Your data is 100% encrypted before leaving
                  your device meaning any data our service facilitate is already
                  encrypted, so even in the worst case scenarios we cannot
                  access any of your messages or data. We cannot send your
                  messages to an unintended recipient as that recipient would
                  not have the key required to decrypt your messages. We cannot
                  replay your past messages as each message utilizes a uniquely
                  generated sequence. We do not want your data. We only collect
                  the minimum to facilitate our services.
                </p>
              </>
            )}
          </AgencyTop>
        </ContainerTop>
        {window.innerWidth >= 800 ? (
          <>
            <AgencyBottomImage>
              <img
                src={'./Child6.png'}
                style={{ position: 'absolute', left: '5vh' }}
              />
              <img
                src={'./Child4.png'}
                style={{ position: 'absolute', right: '6vh', bottom: '7vh' }}
              />
            </AgencyBottomImage>
          </>
        ) : null}
      </WrapperAgency>
    </>
  );
};
export default TheAgency;
