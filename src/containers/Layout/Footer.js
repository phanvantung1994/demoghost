import React from "react";
import {
  FooterContent,
  FooterCol,
  ConverFooter,
  BlockList,
  ListItems,
  DownloadImages,
  ConverDownload,
  CoverFooterBot,
  Privacy,
} from "./Layout.style";

const Footer = () => {
  return (
    <FooterContent>
      <FooterCol span={20}>
        <ConverFooter>
          <BlockList>
            <ListItems>About</ListItems>
            <ListItems>
              <a>Company</a>
            </ListItems>
            <ListItems>
              <a>Career</a>
            </ListItems>
            <ListItems>
              <a>Contact</a>
            </ListItems>
          </BlockList>
          <BlockList>
            <ListItems>Technology</ListItems>
            <ListItems>
              <a>Encryption</a>
            </ListItems>
            <ListItems>
              <a>GHOST Messenger</a>
            </ListItems>
            <ListItems>
              <a>GHOST 360</a>
            </ListItems>
          </BlockList>
          <BlockList>
            <ListItems>R&D</ListItems>
            <ListItems>Partner</ListItems>
            <ConverDownload>
              <DownloadImages
                href="https://install.goghost.org/2022"
                target="_blank"
              >
                <img src="/GhostHome/LogoGoogleCh.png" width={"100%"} />
              </DownloadImages>
              <DownloadImages>
                <img src="/GhostHome/LogoAppStore.png" width={"100%"} />
              </DownloadImages>
            </ConverDownload>
          </BlockList>
        </ConverFooter>
        <CoverFooterBot>
          <img src="./LogoIcon.png" width={"56px"} height={"auto"} />
          <Privacy>Privacy Policy Terms and Conditions</Privacy>
          <p>Copyright © 2022 Ghost</p>
        </CoverFooterBot>
      </FooterCol>
    </FooterContent>
  );
};

export default Footer;
