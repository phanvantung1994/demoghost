import styled from 'styled-components';

const WrapperTerm = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  height: 100%;
  color: #ffffff;
  h1 {
    color: #ffffff;
    font-weight: 700;
    font-size: 30px;
  }
  span {
    font-weight: bold;
  }
  a {
    color: #39adaa;
    text-decoration-line: underline;
  }
  ol {
    padding-left: 50px;
  }
  @media (max-width: 768px) {
    padding: 0 28px;
    ol {
      padding-left: 50px;
    }
  }
`;
const ConverTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-bottom: 2em;
    margin-top: -2rem;
  }
  span {
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 45px;
    color: #ffffff;
  }
`;
export { WrapperTerm, ConverTitle };
