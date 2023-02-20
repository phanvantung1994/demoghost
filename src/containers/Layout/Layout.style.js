import styled, { keyframes } from "styled-components";
import { Col, Row } from "antd";

const FooterContent = styled(Row)`
  height: 300px;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    height: 400px;
  }
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
  width: 185px;
  /* height: 91px; */
  height: 74px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
  cursor: pointer;
  transition: all 0.7s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.08);
  }
`;
const ConverDownload = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1200px) {
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
