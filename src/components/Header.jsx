import styled from "styled-components";
import { Link } from "react-router-dom";
import Login from "./Login";

const Header = () => {
    return (
        <Container>
            <Link to="/">
                <LogoDiv>Airbnb</LogoDiv>
            </Link>
            {/* 메타마스크 로그인 진행 */}

            <Login />
        </Container>
    );
};

export default Header;

const Container = styled.div`
    /* width: calc(100% - 340px); 화면 너비에서 좌우 margin을 뺀 값으로 설정 */
    max-width: 1440px; /* StyledContent의 max-width와 맞춤 */
    height: 80px;
    margin: 0 auto; /* 중앙 정렬 */
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 20px;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    /* background: #6b0000; */
    background-color: white;

    /* 폰트 스타일 */
    color: #000;
    text-align: center;
    font-family: Nunito;
    /* font-size: 20px; */
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 25.6px */
`;

const LogoDiv = styled.div`
    font-size: 28px;
    color: #000;
    font-weight: 700;
    line-height: 36px;
`;
