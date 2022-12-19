import React, { useEffect } from 'react';
import {
  WrapperLayout,
  ContainerTop,
  ContainerBottom,
  ContainerContent,
  Contentparagraph,
  ContainerContentBottom,
  ContainerContentTop,
  WrapperImageTop,
  WrapperImageBottom,
  CoverFilter,
  CoverImageCenter,
} from './GhostStack.style';
const GhostStack = () => {
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
      <WrapperLayout>
        <ContainerTop>
          {window.innerWidth >= 900 ? (
            <img
              src={'./BackGroundStack.webp'}
              alt="BGGhostStack"
              width={'100%'}
              height={'100%'}
            />
          ) : (
            <img
              src={'./BackGroundStackMobile.jpg'}
              alt="BGGhostStackMobile"
              width={'100%'}
              height={'100%'}
            />
          )}

          {window.innerWidth >= 1200 ? (
            <>
              <img
                src={'./ChildStack.png'}
                style={{ position: 'absolute', top: '17vh', left: '45vw' }}
              />
              <img
                src={'./ChildStack1.png'}
                style={{ position: 'absolute', top: '20vh' }}
              />
              <img
                src={'./ChildStack3.png'}
                style={{ position: 'absolute', right: '10vh', bottom: '17vh' }}
              />
            </>
          ) : null}

          <ContainerContentTop>
            <Contentparagraph>
              <a>
                <span>GHOST</span>&nbsp; Messenger
              </a>
              <p>
                Encrypted messages, file transfers, calls and video conferences,
                all integrated into a super app that secures and encrypts all
                your communication. State-of-the-art technology ensures your
                every interaction with other users is protected. No one,
                including us, can listen to your calls, read your messages or
                compromise your file transfers.
              </p>
            </Contentparagraph>
            <WrapperImageTop>
              <img src={'./PhoneTopStack.png'} style={{ width: '100%' }} />
            </WrapperImageTop>
          </ContainerContentTop>
        </ContainerTop>
        <CoverFilter></CoverFilter>
        <ContainerBottom>
          <ContainerContent>
            <WrapperImageBottom>
              <img src={'./PhoneBottomStack.png'} style={{ width: '100%' }} />
            </WrapperImageBottom>
            <Contentparagraph>
              {window.innerWidth >= 1200 ? (
                <>
                  <div style={{ height: '100px' }}>
                    <img
                      src={'./ChildMenu2.png'}
                      style={{
                        position: 'relative',
                        left: '-55vh',
                        top: '17vh',
                      }}
                    />
                    <CoverImageCenter>
                      <p>
                        <img src={'./Child4.png'} />
                      </p>
                      <img src={'./Child3.png'} />
                    </CoverImageCenter>
                    <img
                      src={'./ChildMenu2.png'}
                      style={{
                        position: 'relative',
                        right: '-57vh',
                        bottom: '-78vh',
                      }}
                    />
                    <img
                      src={'./ChildGhostStack.png'}
                      style={{
                        position: 'relative',
                        left: '-73vh',
                        bottom: '-75vh',
                      }}
                    />
                  </div>
                </>
              ) : null}
              <a>
                <span>GHOST</span>&nbsp; OS
              </a>
              <p>
                No matter the app, you are not always protected. When encrypted
                apps are not enough, Go GHOST.
                <br />
                GHOST OS is the world's most secure mobile operating system,
                built from the ground up with encryption in all apps and
                security at every step. GHOST OS is fully locked down with full
                disk encryption and network data management, preventing
                malicious attacks from even the most sophisticated attackers.
              </p>
            </Contentparagraph>
          </ContainerContent>
          <ContainerContentBottom>
            {window.innerWidth >= 1200 ? (
              <>
                Our GHOST Messenger, when used on a device operating GHOST OS
                will provide <br />
                the user with the most complete mobile security solution in the
                world.
              </>
            ) : (
              <>
                Our GHOST Messenger, when used on a device operating GHOST OS
                will provide the user with the most complete mobile security
                solution in the world.
              </>
            )}
          </ContainerContentBottom>
        </ContainerBottom>
      </WrapperLayout>
    </>
  );
};
export default GhostStack;
