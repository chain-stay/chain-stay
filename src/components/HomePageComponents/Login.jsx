import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../App";

const Login = () => {
    const { account, onClickAccount } = useContext(AppContext);

    return (
        <LoginDiv onClick={onClickAccount}>
            <img
                src={`${process.env.PUBLIC_URL}/assets/icons/profil.svg`}
                alt="ProfilSvg"
            />
            {account ? (
                <div>
                    Address : {account.substring(0, 4)}...
                    {account.substring(account.length - 4)}
                </div>
            ) : (
                <div>SignUp/ Login</div>
            )}
        </LoginDiv>
    );
};

export default Login;

const LoginDiv = styled.div`
    cursor: pointer;

    /* width: 174px; */
    height: 50px;
    padding: 6px 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    border-radius: 25px;
    background: #f2f2f2;

    /* 폰트 스타일 설정 */
    font-size: 18px;
    font-weight: 500;
    line-height: 160%; /* 25.6px */
`;
