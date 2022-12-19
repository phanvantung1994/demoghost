import styled from 'styled-components';

const WrapperLayout = styled.div`
  margin-top: -5rem;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #161616;
  // background: url('./BGGhostStack.png') no-repeat center center fixed;
  //   height: 90vh;
  //   -webkit-background-size: cover;
  //   -moz-background-size: cover;
  //   -o-background-size: cover;
  //   background-size: cover;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: space-around;
  //   align-items: center;
`;
const ContainerTop = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 90vh;
  img {
    position: absolute;
  }
  @media (max-width: 768px) {
    min-height: 60vh;
  }
`;
const ContainerBottom = styled.div`
  min-height: calc(90vh + 8rem);
  position: relative;
  @media (max-width: 768px) {
    min-height: 60px;
    flex-direction: column;
  }
`;
const WrapperImageTop = styled.div`
  position:relative;
  width: 50%;
  margin-left: 1rem;
  height: 434px;
  min-width: 413px;
  img {
    position: relative;
    20rem
  }
  @media (max-width: 768px) {
    height:768px;
    min-width: 12rem;
    height: 205px;
    margin: 0;
    margin-bottom: 3rem;
  }
`;
const WrapperImageBottom = styled.div`
  width: 50%;
  margin-left: 1rem;
  height: 297px;
  min-width: 413px;
  img {
    position: relative;
  }
  @media (max-width: 768px) {
    min-width: 100%;
    margin: 0;
    margin-bottom: 3rem;
    img {
      position: relative;
      height: 20rem;
    }
  }
`;

const ContainerContentTop = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 1024px;
  justify-content: center;
  height: 100%;
  @media (max-width: 768px) {
    min-height: 60px;
    flex-direction: column-reverse;
    padding: 100px 0;
  }
`;
const ContainerContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 1024px;
  justify-content: center;
  height: 100%;
  @media (max-width: 768px) {
    min-height: 60px;
    flex-direction: column;
  }
`;
const LayerConverBlur = styled.div``;
const ContainerContentBottom = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  height: 50%;
  align-items: end;
  padding-bottom: 7rem;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 27px;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 11rem;
    text-align: left;
  }
`;

const Contentparagraph = styled.div`
  width: 70%;
  margin-right: 1rem;
  a {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }
  span {
    color: #39adaa;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    color: #ffffff;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-right: 0;
    a {
      font-size: 25px;
      line-height: 35px;
      margin-bottom: 1rem;
    }
    p {
      font-size: 20px;
      line-height: 25px;
    }
  }
`;

const CoverFilter = styled.div`
  width: 100%;
  height: 224px;
  background: linear-gradient(180deg, rgba(22, 22, 22, 0) 0%, #161616 100%);
  margin-top: -224px;
  position: relative;
  @media (max-width: 768px) {
    height: 130px;
    margin-top: -130px;
  }
`;

const CoverImageCenter = styled.div`
  height: 50px;
  display: flex;
  position: relative;
  p {
    margin-top: 1rem;
    margin-right: -16px;
  }
`;

export {
  WrapperLayout,
  ContainerTop,
  ContainerBottom,
  CoverFilter,
  WrapperImageTop,
  WrapperImageBottom,
  ContainerContent,
  LayerConverBlur,
  ContainerContentBottom,
  Contentparagraph,
  ContainerContentTop,
  CoverImageCenter,
};
