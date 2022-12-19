import styled from 'styled-components';

const WrapperAgency = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AgencyTop = styled.div`
  position: relative;
  max-width: 1024px;
  margin-top: 18rem;
  text-align: center;
  background: transparent;
  // position: absolute;
  padding-bottom: 11rem;
  span {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #39adaa;
    margin-bottom: 2rem;
  }
  a {
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 45px;
    color: #ffffff;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #ffffff;
    text-align: left;
  }
  @media (max-width: 768px) {
    position: relative;
    padding-top: 160px;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 0;
    span {
      font-size: 40px;
      line-height: 35px;
    }
    p {
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }
    a {
      font-weight: 900;
      font-size: 28px;
      line-height: 35px;
    }
  }
`;
const AgencyBottom = styled.div`
  width: 100%;
  height: 55vw;
  @media (max-width: 1300px) {
    height: 60vw;
  }
  // background: url('/BackGround.png') no-repeat center center fixed;
  //   height: 50vh;
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
  width: 100%;
  margin-top: -5rem;
  min-height: 150vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url('./BackGroundAgency.jpg') no-repeat center bottom fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  img {
    position: absolute;
  }

  @media (max-width: 768px) {
  }
`;

const AgencyBottomImage = styled.div`
  height: 102vh;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: -652px;
  background: transparent;
`;
export {
  WrapperAgency,
  AgencyTop,
  AgencyBottom,
  AgencyBottomImage,
  ContainerTop,
};
