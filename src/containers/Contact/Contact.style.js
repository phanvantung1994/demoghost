import styled from 'styled-components';

const WrapperLayout = styled.div`
  margin-top: -5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100.8vh;
  @media (max-width: 768px) {
    height: 130vh;
  }
`;
const WrapperContact = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1080px;
  .ant-form {
    width: 100%;
    margin-left: 7rem;
  }
  .ant-form-item-label > label {
    color: #ffffff;
  }
  @media (max-width: 768px) {
    padding: 100px 0;
    .ant-form {
      width: 90%;
      margin: 0;
    }
  }
`;
const ContactContent = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
  span {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }
`;
const WrapperForm = styled.div`
  max-width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  .ant-input {
    background: rgba(57, 173, 170, 0.3);
    border: 1px solid #c5c4c4;
    border-radius: 5px;
    color: #ffffff;
  }
  .ant-input:hover {
    background: rgba(57, 173, 170, 0.3);
    color: #ffffff;
    transform: scale(1.02);
  }
  .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input {
    background: rgba(57, 173, 170, 0.3);
    color: #ffffff;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const WrapperFormLeft = styled.div`
  width: 100%;
  .ant-col-16 {
    max-width: 100%;
  }
`;
const WrapperFormRight = styled.div`
  width: 100%;
  margin-left: 32px;
  margin-right: -8rem;
  .ant-col-offset-8 {
    margin-left: 0;
  }
  .ant-btn-primary {
    width: 176px;
    height: 42px;
    background: linear-gradient(0deg, #39adaa, #39adaa), #39adaa;
    border-radius: 5px;
    border: none;
    &:hover{
      background: linear-gradient(
        225deg,
        rgb(24, 200, 255) 14.89%,
        rgb(45, 198, 89) 85.85%
      );
    }
  }
  @media (max-width: 768px) {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
  }
`;

export {
  WrapperLayout,
  WrapperContact,
  ContactContent,
  WrapperForm,
  WrapperFormLeft,
  WrapperFormRight,
};
