import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Container>
            <Link to="/">
                <LogoDiv>Airbnb</LogoDiv>
            </Link>
            {/* 메타마스크 로그인 진행 */}
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
    /* padding: 15px 0px; */
    height: 80px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 20px;
    position: absolute;
    background: #6b0000;
    position: fixed;

    /* 폰트 스타일 */
    color: #000;
    text-align: center;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 25.6px */
`;

const LogoDiv = styled.div`
    width: 906px;
    height: 36px;

    display: flex;
    align-items: start;

    flex: 1 0 0;
    font-size: 28px;
    color: #000;
    font-weight: 700;
    line-height: 36px;
`;
const LoginDiv = styled.div`
    cursor: pointer;

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
    font-size: 16px;
    font-weight: 400;
    line-height: 160%; /* 25.6px */
`;
