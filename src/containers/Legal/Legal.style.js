import styled from 'styled-components';

const WrapperLegal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -5rem;
`;
const ConverPanel = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  img {
    position: absolute;
    min-height: 60vh;
  }
  @media (max-width: 768px) {
    min-height: 90vh;
  }
`;
const WrapperImage = styled.div`
  width: 100%;
  height: 100%;
  img {
    z-index: -100;
  }
`;
const ConverContentPanel = styled.div`
  position: relative;
  display: flex;
  max-width: 1080px;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  text-align: center;
  min-height: 100%;
  color: #ffffff;
  a {
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 38px;
    text-align: center;
    color: #ffffff;
  }
  span {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
  }
  @media (max-width: 768px) {
    a {
      font-size: 20px;
    }
    span {
      font-size: 25px;
      line-height: 35px;
      color: #39adaa;
    }
    p {
      margin-top: 10px;
      font-size: 17px;
      padding: 0 17px;
      line-height: 25px;
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      text-align: center;
    }
  }
`;

const ConverTabs = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: -140px;
  max-width: 872px;
  .ant-tabs-content {
    color: white;
  }
  .ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab-active,
  .ant-tabs-card.ant-tabs-top > div > .ant-tabs-nav .ant-tabs-tab-active {
    border: none;
    height: 120px;
    width: 176px;
    background: #161616 !important;
    border-radius: 5px 5px 0px 0px;
    margin-top: 20px;
    box-shadow: rgb(255 255 255 / 60%) 4.95px -3.05px 8.6px;
}
  }
  .ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab,
  .ant-tabs-card.ant-tabs-top > div > .ant-tabs-nav .ant-tabs-tab {
    width: 176px;
    height: 120px;
    background: #39adaa;
    border-radius: 5px 5px 0px 0px;
    margin-right: 21px;
    margin-left: 21px;
    margin-top: 20px;
}
  }
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-list {
    border-bottom: 2px solid;
  }
  .ant-tabs-tab :hover{
    transform: scale(1.05);
  }
  .ant-tabs-tab{
    display: flex;
    text-align: center;
    white-space: normal;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }
  ul{
    margin-top: 2rem;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #FFFFFF;
  }
  a {
    color: #39adaa;
    text-decoration-line: underline;
  }
  @media(max-width:768px){
    margin-top: -80px;
    ul{
      font-size: 16px;
      line-height: 24px;
      padding: 0px 28px;
    }
    .ant-tabs-tab-btn{
      font-size: 10px;
      font-weight: bold;
      line-height: 12px;
    }
    .ant-tabs > .ant-tabs-nav .ant-tabs-nav-wrap{
      justify-content: space-around;
    }

    .ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab,
  .ant-tabs-card.ant-tabs-top > div > .ant-tabs-nav .ant-tabs-tab {
    width: 82px;
    height: 64px;
    background: #39adaa;
    border-radius: 5px 5px 0px 0px;
    margin-right: 0px;
    margin-left: 5px;
    margin-top: 20px;
    padding: 0;
}
  }
`;
export {
  WrapperLegal,
  ConverPanel,
  ConverContentPanel,
  ConverTabs,
  WrapperImage,
};
