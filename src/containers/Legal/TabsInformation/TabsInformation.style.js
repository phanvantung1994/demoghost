import styled from 'styled-components';

const Wrapper = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  height: 100%;
  color: #ffffff;
  span {
    font-weight: bold;
  }
  a {
    color: #39adaa;
    text-decoration-line: underline;
  }
  p {
    font-style: normal;
    font-weight: 100;
    font-size: 13px;
    line-height: 9px;
  }
  @media (max-width: 768px) {
    padding: 0 28px;
  }
`;
const ConverTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-bottom: 2em;
    margin-top: -2rem;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    height: 100%;
    color: #ffffff;
  }
  span {
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 45px;
    color: #ffffff;
  }
`;
export { Wrapper, ConverTitle };
