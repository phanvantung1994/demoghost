import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Wrapper = styled.div`
  backgroundcolor: ${themeGet('colors.primary')};
  height: 100%;
  color: red;
  margin-top: -5rem;
`;
const ConverBackGround = styled.div`
  position: relative;
  display: flex;
  min-height: 90vh;
  img {
    position: absolute;
  }
  @media (max-width: 768px) {
    min-height: 60vh;
  }
`;

const ConverContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  min-height: 90vh;
  @media (max-width: 768px) {
    min-height: 60px;
    padding: 160px 0;
  }
`;
const FilterBackground = styled.div`
  position: relative;
  height: 20vh;
  margin-top: -20vh;
  width: 100%;
  background: linear-gradient(180deg, rgba(22, 22, 22, 0) 0%, #161616 100%);
`;
const ConverTitle = styled.div`
  margin-top: 7vh;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
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
    text-align: center;
    color: #39adaa;
  }
  a {
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 60px;
    text-align: center;
    color: #ffffff;
  }
  @media (max-width: 768px) {
    p {
      font-size: 22px;
      line-height: 0px;
    }
    span {
      font-size: 25px;
      line-height: 35px;
      margin: 1rem 0;
    }
    a {
      font-size: 21px;
      line-height: 25px;
    }
  }
`;
const ConverContentBottom = styled.div`
  min-height: calc(90vh + 8rem);
  position: relative;
  color: #ffffff;
  text-align: center;
  p {
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 35px;
  }
  a {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
  }
  span {
    background: linear-gradient(0deg, #39adaa, #39adaa), #39adaa;
    border-radius: 5px;
    width: 176px;
    height: 42px;
    margin-top: 2rem;
    justify-content: center;
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    color: #161616;
  }
  @media (max-width: 768px) {
    min-height: 60vh;
    p {
      font-size: 22px;
      line-height: 15px;
    }

    a {
      font-size: 18px;
      line-height: 24px;
      padding: 0 2.5rem;
    }
    span {
      margin-bottom: 6rem;
    }
  }
`;
const ContentBottom = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    margin-left: 0.2rem;
  }
  @media (max-width: 768px) {
    margin-top: -3rem;
  }
`;

export {
  Wrapper,
  ConverBackGround,
  ConverContent,
  FilterBackground,
  ConverTitle,
  ConverContentBottom,
  ContentBottom,
};
