import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../App";
import { Link, useNavigate } from "react-router-dom";

const Modal = ({
  iconUrl,
  title,
  subTitle,
  buttonTexts,
  buttonColors,
  buttonTextColors,
}) => {
  const { setIsOpen, onClickAccount } = useContext(AppContext); // AppContext에서 setIsOpen 가져오기
  const navigate = useNavigate();

  const handleFirstButtonClick = async () => {
    if (buttonTexts[0] === "Login/ SignUp") {
      await onClickAccount();
    }
    setIsOpen(false);

    if (buttonTexts[0] === "Go to myPage") {
      setIsOpen(true);
    }
  };

  const handleCancelClick = async () => {
    if (buttonTexts[1] === "Back to HomePage") {
      await navigate("/");
    }
    setIsOpen(false);
  };

  return (
    <Background>
      <Container>
        <Icon iconUrl={iconUrl} />
        <Text>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </Text>
        <ButtonsContainer>
          <Button
            color={buttonColors[0]}
            textColor={buttonTextColors[0]}
            onClick={handleFirstButtonClick}
          >
            {buttonTexts[0]}
          </Button>

          <Button
            color={buttonColors[1]}
            textColor={buttonTextColors[1]}
            onClick={handleCancelClick}
          >
            {buttonTexts[1]}
          </Button>
        </ButtonsContainer>
      </Container>
    </Background>
  );
};

export default Modal;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 반투명 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 모달을 다른 컨텐츠보다 위에 표시 */
`;

const Container = styled.div`
  background: #fff;
  padding: 20px 16px 20px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 290px;
  height: 306px;
  border-radius: 8px; /* 모서리 둥글게 */
`;

const Icon = styled.div`
  height: 48px;
  width: 48px;
  background-image: url(${(props) => props.iconUrl});
  background-size: cover;
  background-position: center;
`;

const Text = styled.div`
  color: #111827;
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 35px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 800;
  line-height: 24px; /* 100% */
`;

const SubTitle = styled.h4`
  color: #6b7280;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Button = styled.button`
  width: 226px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 6px;
  background: ${(props) => props.color};
  color: ${(props) => props.textColor};
  cursor: pointer;
  border: 1px solid #d1d5db;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px; /* 150% */
`;

const StyledLink = styled(Link)`
  width: 226px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 6px;
  background: ${(props) => props.color};
  color: ${(props) => props.textColor};
  cursor: pointer;
  border: 1px solid #d1d5db;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px; /* 150% */
  text-decoration: none;
`;
