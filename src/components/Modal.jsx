import styled from "styled-components";

const Modal = () => {
    return (
        <Background>
            <Container>
                <Icon />
                <Text>
                    <Title>Login / Sign Up</Title>
                    <SubTitle>Kindly sign up or log in to continue.</SubTitle>
                </Text>

                <ButtonsContainer>
                    <Button>안녕</Button>
                    <Button>안녕</Button>
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
    padding: 20px 16px 14px 16px;
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
    background-image: url("/assets/icons/error.svg");
`;
const Text = styled.div`
    color: #111827;
    display: flex;
    flex-direction: column;
    margin: auto;
    /* gap: 39px; */
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 700;
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

const Button = styled.div`
    width: 226px;
    height: 42px;
    /* padding: 11px 71.28px 12px 71.27px; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 6px;
    background: #dc2626;
    cursor: pointer;
    /* box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05); */

    color: #fff;

    text-align: center;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px; /* 150% */
`;
