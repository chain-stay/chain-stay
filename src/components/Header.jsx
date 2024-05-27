import styled from "styled-components";

const Header = () => {
    return (
        <Container>
            <LogoDiv>Airbnb</LogoDiv>
            <LoginDiv>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/icons/profil.svg`}
                    alt="ProfilSvg"
                />
                <div> SignUp/ Login</div>
            </LoginDiv>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    width: calc(100% - 340px); /* StyledContent의 width에 맞게 설정 */
    height: 80px;
    padding: 20px 0px;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 20px;
    position: absolute;
    background: #6b0000;
`;

const LogoDiv = styled.div`
    width: 906px;
    height: 36px;

    display: flex;
    align-items: start;

    flex: 1 0 0;
    color: #000;
    font-family: Roboto;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
`;
const LoginDiv = styled.div`
    width: 174px;
    height: 50px;
    padding: 6px 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    border-radius: 25px;
    background: #f2f2f2;

    //font 스타일 설정
    color: #000;
    text-align: center;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 25.6px */
`;
