import styled, { keyframes } from "styled-components";
import { Col, Row } from "antd";

const FooterContent = styled(Row)`
  height: 300px;
  justify-content: center;
  align-items: center;
`;
const FooterCol = styled(Col)``;
const ConverFooter = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-direction: column;
    margin-top: 30px;
  }
`;
const BlockList = styled.ul`
  width: 30%;
  list-style: none;
  justify-content: space-between;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const ListItems = styled.li`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
  a {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #000000;
  }
`;
const DownloadImages = styled.a`
  margin-top: 20px;
  width: 47%;
  height: 75px;
  background: linear-gradient(0deg, #1f2633, #1f2633),
    linear-gradient(180deg, #f1f1f1 0%, #d9d9d9 100%);
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    padding-left: 10px;
  }
  p {
    padding-left: 10px;
    margin-bottom: 0;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #f1f1f1;
    span {
      font-weight: 700;
      font-size: 17px;
      line-height: 27px;
      text-transform: uppercase;
    }
  }
`;
const ConverDownload = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const CoverFooterBot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  margin-bottom: -50px;
  margin-top: 20px;
  color: #000000;
  p {
    margin: 0;
  }
`;
const Privacy = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;
export {
  FooterContent,
  FooterCol,
  ConverFooter,
  BlockList,
  ListItems,
  DownloadImages,
  ConverDownload,
  CoverFooterBot,
  Privacy,
};
