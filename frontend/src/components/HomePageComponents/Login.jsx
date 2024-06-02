import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../App";

const Login = () => {
    const { account, onClickConnect, onClickDisconnect } =
        useContext(AppContext);

    return (
        <LoginDiv onClick={account ? onClickConnect : onClickDisconnect}>
            <Button>
                <div className="svg-wrapper">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.4933 12.4382C11.4933 12.4382 -0.483397 9.96056 3.67855 7.55801C7.1907 5.53071 19.2947 2.04516 20.9857 2.94576C21.8863 4.63676 18.4007 16.7407 16.3734 20.2529C13.9709 24.4148 11.4933 12.4382 11.4933 12.4382Z"
                            stroke="#1E88E5" /* 텍스트와 SVG 색상 변경 */
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M11.4933 12.4382L20.9857 2.94577"
                            stroke="#1E88E5" /* 텍스트와 SVG 색상 변경 */
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
                <span>{account ? "Disconnect_" : "SignUp/ Login"}</span>
                {account && (
                    <div>
                        Address : {account.substring(0, 4)}...
                        {account.substring(account.length - 4)}
                    </div>
                )}
            </Button>
        </LoginDiv>
    );
};

export default Login;

const LoginDiv = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Button = styled.button`
    cursor: pointer;
    font-family: inherit;
    font-size: 18px;
    background: linear-gradient(to bottom, #e0e0e0 0%, #f5f5f5 100%);
    color: #00549e; /* 텍스트와 SVG 색상 변경 */
    padding: 0.8em 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 25px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
    }

    &:active {
        transform: scale(0.95);
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    }

    span {
        display: block;
        margin-left: 0.4em;
        transition: all 0.3s;
        color: #00549e; /* 텍스트와 SVG 색상 변경 */
    }

    svg {
        width: 18px;
        height: 18px;
        fill: #badfff; /* 텍스트와 SVG 색상 변경 */
        transition: all 0.3s;
    }

    .svg-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.2);
        margin-right: 0.5em;
        transition: all 0.3s;
    }

    &:hover .svg-wrapper {
        background-color: rgba(255, 255, 255, 0.5);
    }

    &:hover svg {
        transform: rotate(45deg);
    }
`;
